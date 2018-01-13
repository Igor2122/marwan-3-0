window.onload = function () {



    const memuDivs = document.querySelectorAll('.menudivs');


    for (var i = 0; i < memuDivs.length; i++) {
        memuDivs[i].addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
            e.target.previousElementSibling.style.display = 'block';
                document.body.style.overflow =  'hidden'
            } else if (e.target.className == 'overlay' || e.target.tagName == 'img') {
                e.target.style.display = 'none';
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
