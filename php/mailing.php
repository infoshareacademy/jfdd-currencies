     <?php
            if($_POST['numer') && $_POST['mail']{
                $wiadomosc=$_POST['numer'].$_POST['mail'];
            }

            if(mail("l.komajda@wp.pl", "Dane kontaktowe", $wiadomosc)){
        ?>
            <script>
                window.alert("Mail został wysłany");
            </script>
        <?php
            }
        ?>