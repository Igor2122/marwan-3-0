const helthydiv = document.getElementsByClassName('item')[0];
const fastCooked = document.getElementsByClassName('item')[1];
const dessert = document.getElementsByClassName('item')[2];
const divOne = document.getElementById('item-11');
const div = document.getElementsByTagName('button')[0];
const divTwo = document.getElementById('item-12');
const divThree = document.getElementById('item-13');

helthydiv.addEventListener('click', () => {
    divOne.style.transform = 'translateX(0%)';
    divTwo.style.transform = 'translateX(100%)';
    divThree.style.transform = 'translateX(100%)';
    helthydiv.style.cursor = 'pointer';
});

fastCooked.addEventListener('click', () => {
    divOne.style.transform = 'translateX(100%)';
    divTwo.style.transform = 'translateX(0%)';
    divThree.style.transform = 'translateX(100%)';
});

dessert.addEventListener('click', () => {
    console.log('hello');
    divOne.style.transform = 'translateX(100%)';
    divTwo.style.transform = 'translateX(100%)';
    divThree.style.transform = 'translateX(0%)';    
});

const topBackdrImg = document.getElementsByClassName('top-backdrop')[0];

window.addEventListener('load', loadFunction);

function loadFunction () {
    topBackdrImg.style.transition = "all 2s";
    topBackdrImg.style.right = '-10%';
}


 


