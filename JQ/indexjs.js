const stones = document.querySelector('.video');



window.addEventListener('scroll', () => {
    stones.style.top = (window.pageYOffset / 3) + 'px';
})

window.addEventListener('scroll', parralex, false);

function parralex() {
    //     stones.style.top = (window.pageYOffset /3) + 'px';
}

window.addEventListener('scroll', function() {
    yScrolll();
    yScroll();
});


const picOne = document.getElementsByClassName('first-image')[0]
const picTwo = document.getElementsByClassName('second-image')[0]
const bioDiv = document.getElementsByClassName('bio-div')[0];

const contact = document.getElementsByClassName('contacts')[0];
let div = document.getElementById('contact-links')

contact.addEventListener('click', () => {
    div.style.opacity = '1';
});

function yScrolll() {
    let yPos = window.pageYOffset;
    console.log(yPos);
    if (yPos > 590) {
        
    }
};

 

// contacts
function yScroll() {
    let yPos = window.pageYOffset;
        if (yPos > 8) {
            div.style.opacity = '0';
        }
};



// ABOUT SLIDER 

const upArrow = document.querySelector('.next-arrow-up');
const downArrow = document.querySelector('.next-arrow');
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