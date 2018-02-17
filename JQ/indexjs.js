
$( document ).ready(function() {
    
    
    $('h1').fadeIn('slow');
    
    
    
    
    // /HOMEDIV PARRALEX EFFECT
    
    $('.nav-scroll').click(function (e) {
        e.preventDefault();
        
        let linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
            }, 1000);
            
    });

    // SMOOTH SCROOL PAGE EFFECT 
    
});



// HOMEDIV PARRALEX EFFECT

window.addEventListener('scroll', parralex, false);

const homeDiv = document.querySelector('.video');

function parralex () {
    homeDiv.style.top = (window.pageYOffset / 3) + 'px';
}






// /END  *** SMOOTH SCROOL PAGE EFFECT 




// CONTACT LINKS ANIMATION  

    
window.addEventListener('scroll', yScroll);

const contact = document.getElementsByClassName('contacts')[0];
let div = document.getElementById('contact-links');

contact.addEventListener('click', () => {
    div.style.opacity = '1';
});

let yPos = window.pageYOffset;
function yScroll() {
    console.log(yPos);
    if (yPos > 8) {
            div.style.opacity = '0';
        } 

}

// /END  *** CONTACT LINKS ANIMATION 




// ABOUT SLIDER 

const sliderImages = document.getElementsByClassName('slider-img');

let count = 0;

function nextSlide () {
    sliderImages[count].style.opacity = '1';
    setTimeout('sliderReset()', 3000);
}

function sliderReset () {
    sliderImages[count].style.opacity = '0';
    count++;
    if(count > (sliderImages.length -1) ) {
        count = 0;
    }
    setTimeout('nextSlide()', 500);
}


sliderReset();

