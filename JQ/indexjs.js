


// HOMEDIV PARRALEX EFFECT

window.addEventListener('scroll', parralex, false);

const homeDiv = document.querySelector('.video');

function parralex () {
    homeDiv.style.top = (window.pageYOffset / 3) + 'px';
}

// /HOMEDIV PARRALEX EFFECT



// SMOOTH SCROOL PAGE EFFECT 

let scrollY = 0;
let distance = 40;
const speed = 24;

 
function autoscrollTo (el) {
    let targetY = document.getElementById(el).offsetTop;
    let bodyHeight = document.body.offsetHeight;
    let currentY = yPos + window.innerHeight;
    let animatior = setTimeout('autoscrollTo(\' '+el+' \')',speed);
    if(currentY > bodyHeight) {
        clearTimeout(animatior);
    } else {
        if(yPos < targetY - distance) {
            scrollY = yPos + distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animatior);
        }
    }
}



// /SMOOTH SCROOL PAGE EFFECT 





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

// /CONTACT LINKS ANIMATION 




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