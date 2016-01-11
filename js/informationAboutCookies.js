function okienko() {
    var container = document.createElement('div'),
        link = document.createElement('a');

    container.setAttribute('id', 'informationAboutCookies');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<h6>Strona wykorzystuje pliki cookie</h6><p>Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych,reklamowych oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce,dzięki czemu nie będą zbierane żadne informacje.</p>';

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'x';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        container.setAttribute('style', 'opacity: 1');

        var interval = window.setInterval(function() {
            container.style.opacity -= 0.01;

            if (container.style.opacity <= 0.02) {
                document.body.removeChild(container);
                window.clearInterval(interval);
                monster.set('cookieinfo', 'true', 365);
            }
        }, 4);
    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    document.body.appendChild(container);

    return true;
}
okienko();