window.onload = function() {



    const memuDivs = document.querySelectorAll('.menudivs');
    const menuOverlay = document.querySelector('.overlay');
    const closeLogo = document.createElement('IMG');
    closeLogo.src = '../assets/images/close.png';


    for (var i = 0; i < memuDivs.length; i++) {
        memuDivs[i].addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                menuOverlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                menuOverlay.appendChild(closeLogo);
                closeLogo.setAttribute("style", "position:absolute;top:10%;right:10%;");
                
            }
            else if (e.target.className == 'overlay' || e.target.tagName == 'IMG') {
                menuOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }

        });
    }









    var viewportOffset = window.pageYOffset;
    console.log('hello');

    console.log(viewportOffset);

    const snadwichMenuBar = document.getElementsByClassName('sandwichmenulogo');

    function hideMenu(e) {
        e.removeClass('sandwichmenulogo');
    }









}; // end of the onload function
