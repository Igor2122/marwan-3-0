
const topBackdrImg = document.getElementsByClassName('top-backdrop')[0];

window.addEventListener('load', loadFunction);

function loadFunction() {
    topBackdrImg.style.transition = "all 2s";
    topBackdrImg.style.right = '-10%';
}

const soupDiv  = document.getElementById('item-10');
const healthyDiv = document.getElementById('item-11');
const sandwichesDiv = document.getElementById('item-12');
const maincoursediv = document.getElementById('item-13');
const dessertDiv = document.getElementById('item-14');

const buttonEventParent = document.getElementsByClassName('items')[0];

console.log(buttonEventParent);

buttonEventParent.addEventListener('click', (event) => {
   function showContent (elem) {
       elem.style.transform = 'translateX(0)';
   }

   function hideContent (elem) {
       elem.style.transform = 'translateX(100%)';
   }

    if(event.target.textContent === 'Soup' ) {
        showContent(soupDiv);
        hideContent(healthyDiv);
        hideContent(sandwichesDiv);
        hideContent(maincoursediv);
        hideContent(dessertDiv);
    } else if (event.target.textContent == 'Healthy') {
        showContent(healthyDiv);
        hideContent(soupDiv);
        hideContent(sandwichesDiv);
        hideContent(maincoursediv);
        hideContent(dessertDiv);
    } else if (event.target.textContent == 'Sandwiches') {
        showContent(sandwichesDiv);
        hideContent(soupDiv);
        hideContent(healthyDiv);
        hideContent(maincoursediv);
        hideContent(dessertDiv);
    } else if (event.target.textContent === 'Main Courses') {
        showContent(maincoursediv);
        hideContent(soupDiv);
        hideContent(healthyDiv);
        hideContent(sandwichesDiv);
        hideContent(dessertDiv);
    } else if (event.target.textContent === 'Dessert'){
        showContent(dessertDiv);
        hideContent(soupDiv);
        hideContent(healthyDiv);
        hideContent(sandwichesDiv);
        hideContent(maincoursediv);
    }
});






