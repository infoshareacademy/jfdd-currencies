(function() {
    if (monster.get('informationAboutCookies') === 'true') {
        return false;
    }

    var boxAboutInformation = document.createElement('div'),
        link = document.createElement('a');

    boxAboutInformation.setAttribute('id', 'informationAboutCookies');
    boxAboutInformation.setAttribute('class', 'cookie-alert');
    boxAboutInformation.innerHTML = '<h6>Strona wykorzystuje pliki cookie</h6><p>Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą zbierane żadne informacje.</p>';

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'x';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        boxAboutInformation.setAttribute('style', 'opacity: 1');

        var interval = window.setInterval(function() {
            boxAboutInformation.style.opacity -= 0.01;

            if (boxAboutInformation.style.opacity <= 0.02) {
                document.body.removeChild(boxAboutInformation);
                window.clearInterval(interval);
                monster.set('informationAboutCookies', 'true', 365);
            }
        }, 4);
    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    boxAboutInformation.appendChild(link);
    document.body.appendChild(boxAboutInformation);

    return true;
})();