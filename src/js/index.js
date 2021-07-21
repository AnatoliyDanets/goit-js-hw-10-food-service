
import dishes from './menu.json';
import cardTml from '/dishes-card.hbs';
import '/styles.css';


const dishesList = document.querySelector('.js-menu')
console.log(dishesList)
const manyDishes = createDishesCard(dishes)

function createDishesCard(dishes) {

    // return dishes.map(cardTml).join('')
    return cardTml(dishes)
}
dishesList.insertAdjacentHTML('beforeend', manyDishes);


const dishIngredientList = document.querySelector('.tag-list')
console.log(dishIngredientList)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme
 
const onChekBoxRef = document.querySelector('.theme-switch__toggle')

onChekBoxRef.addEventListener('change', onClickChangeTheme);

saveChangeTheme();



function onClickChangeTheme() {
    if (onChekBoxRef.checked) {
        document.body.classList.add(DARK)
        document.body.classList.remove(LIGHT)
        localStorage.setItem("Theme", DARK)
     
    }
    else {
        document.body.classList.remove(DARK)
        document.body.classList.add(LIGHT)
        localStorage.setItem("Theme", LIGHT)
        
    }


}

function saveChangeTheme() {
    const savedTheme = localStorage.getItem('Theme')
    if (savedTheme === DARK) {
        document.body.className = savedTheme
        onChekBoxRef.checked = true  
    }
    else {
        onChekBoxRef.checked  = false
    }
}

