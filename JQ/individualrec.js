window.addEventListener('scroll', scrollTop, false);
window.addEventListener('load', divmovements);
const maindiv = document.getElementById('recipie-div');
const image = document.getElementById('mainimage');
const ingridientsDiv = document.getElementsByClassName('ingridients')[0];
const directionsDiv = document.getElementsByClassName('redepie-directions')[0];


// self closing button


const button = document.querySelector('.back-arrow')

button.addEventListener('click', () => {
    window.open('', '_self', '');
    window.close();
});






function scrollTop() {
    maindiv.style.top = (window.pageYOffset / 4) + 'px';
}

if (screen.width < 640) {
    ingridientsDiv.style.right = '5%';
}

function divmovements() {
    ingridientsDiv.style.opacity = '1';
    ingridientsDiv.style.transition = "all 1s";
    directionsDiv.style.transition = "top 1s";
    image.style.opacity = '1';
    image.style.transition = "opacity 1s, transform 1s";
    image.style.transform = 'scale(1.5) translateX(10%)';
    //    sharediv.style.left = '0%';
}

// SHARE DIV 


const sharediv = document.getElementById('social-media-share');
sharediv.setAttribute('style', 'left:2%;');




















// facebook share button 
//const facebookShare = document.createElement('DIV');
//sharediv.appendChild(facebookShare);
//facebookShare.innerHTML = '<a href="http://www.facebook.com/sharer.php?u=' + window.location.href + 'm" target="_blank"><img style="width:35px;" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a>';
//facebookShare.setAttribute('style', 'width:35px;');



// Linkedin share button 
//const linkedinShare = document.createElement('DIV');
//sharediv.appendChild(linkedinShare);
//linkedinShare.innerHTML = '<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + window.location.href + '" target="_blank"><img style="width:35px;" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a>';

// twitter share button 

//const twittershare = document.createElement('DIV');
//sharediv.appendChild(twittershare);
//twittershare.innerHTML = '<a href="https://twitter.com/share?url=' + window.location.href + '&amp;text=Chef%20Marwan%20Slim&amp;hashtags=simplesharebuttons" target="_blank"><img style="width:35px;" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>';

// email share button 

//const emailShare = document.createElement('DIV');
//sharediv.appendChild(emailShare);
//emailShare.innerHTML = '<a href="mailto:?Subject=Chef Marwan Slim Recipies&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 '+ window.location.href+ '"><img style="width:35px;" src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /></a>'



// pinterest share button 
//
//const pinterestShare = document.createElement('DIV');
//sharediv.appendChild(pinterestShare);
//pinterestShare.innerHTML = '';




//sharediv.addEventListener('mouseover', function (e) {
//    if (e.target.className == 'facebook') {
//        e.target.style.width = '150%';
//        e.target.style.transition = 'width 1s ease'
//        e.target.innerHTML = '';
//    };
//
//
//});


//sharediv.addEventListener('mouseleave', function (e) {
//    e.target.innerHTML = '';
//    e.style.width = '100%';
//});
