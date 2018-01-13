window.addEventListener('scroll', scrollTop, false);
window.addEventListener('load', divmovements);
const maindiv = document.getElementById('recipie-div');
const image = document.getElementById('mainimage');
const ingridientsDiv = document.getElementsByClassName('ingridients')[0];
const directionsDiv = document.getElementsByClassName('redepie-directions')[0];



function scrollTop() {
    maindiv.style.top = (window.pageYOffset / 4) + 'px';
    image.style.top = (window.pageYOffset / 5) + 'px';
    sharediv.style.top = (window.pageYOffset / 3) + 'px';
}

if (screen.width < 640) {
    ingridientsDiv.style.right = '5%';
}

function divmovements() {
    ingridientsDiv.style.right = '15%';
    ingridientsDiv.style.transition = "all 1s";
    directionsDiv.style.transition = "top 1s";
    image.style.opacity = '1';
    image.style.transition = "opacity 1s, transform 1s";
    image.style.transform = 'scale(1.05)';
    sharediv.style.left = '0%';
}

// SHARE DIV 


const sharediv = document.getElementById('social-media-share');
const shareIcon = document.getElementsByClassName('share-icon');

sharediv.addEventListener('mouseover', function (e) {
    if (e.target.className === 'share-icon') {
        e.target.style.width = '150%';
        e.target.style.transition = 'width 1s ease';
        e.target.textContent = 'share';
    }
});


sharediv.addEventListener('mouseleave', function () {
    for (var i = 0; i < shareIcon.length; i++) {
        shareIcon[i].style.width = '100%';
    }
});
