import * as Card from "../card/card.js";
import { PetItemPopup } from "../petItemPopup/petItemPopup.js";
import { Popup } from "../popup/popup.js"; 
import * as Pet from "../pet/pet.js"
import { PetsJSON } from "../../../data/pets.js";

let cards = new Array();
let visibleCards = new Array(); // для исключения повторов на соседних блоках
let cardConteiner = null; // выносим переменную глобально, так как потом будем навешивать на нее анимацию через функцию 
let buttonLeft = null;
let buttonRight = null;
let isRightClick = false;
let isLeftClick = false;
let indexVisibleGroup = 2; // всегда виден контейнер со значением 2 
let deltaOrder = 0;
let countCard = 3 

const widthScreenDesk = 1280;
const widthScreenTablet = 1150;
const widthScreenMob = 320;

window.addEventListener("resize", countCardForWidth);

function countCardForWidth() {
    if(document.documentElement.clientWidth > (widthScreenDesk)) {
        countCard = 3
        console.log(countCard);
        return countCard;
    } else if(document.documentElement.clientWidth > (widthScreenTablet)) {
        countCard = 2
        console.log(countCard);
        return countCard;
    } else {
        countCard = 1
        console.log(countCard);
        return countCard;
    }
}
countCardForWidth()


function createComponent(PetsJSON) {

    //проверка на массив - если не массив остановим инициализауцию и пробросим ошибку 
    if(!Array.isArray(PetsJSON)){
        throw TypeError("Slider error. Pets array is invalid");
    }

    //wrapper
    const component = createElement("div", "wrapper");

    // Титул секции 
    const sectionTitile = createElement("h2", "our-friends__title");
    sectionTitile.innerText = "Our friends who\nare looking for a house";
    component.append(sectionTitile)

    // блок для сьрелок и карточек
    const contentConteiner = createElement("div", "our-friends__cards");
    component.append(contentConteiner)
    // стрелка влево
    buttonLeft = createElement("button", "our-friends__cards-arrow", "our-friends__cards-arrow_left");
    contentConteiner.append(buttonLeft)

    // общий блок карточек
    const blockContent = createElement("div", "our-friends__cards-box");

    blockContent.addEventListener("click", (e) => {
        if(e.target.closest(".our-friends__card")) {
          let clickPetItemId = e.target.closest(".our-friends__card").getAttribute("data-id");
         // console.log(clickPetItemId)
         let clickPetItemPets = getClickPets(clickPetItemId);
    
         renderPetItemModalWimdow(clickPetItemPets)
        }
      })

    // блок для видимых карточек (3,2,1)
    cardConteiner = createElement("ul", "our-friend__card-conteiner");

    // в общий блок для карточек добавляем контейнер для видимых карточек
    blockContent.append(cardConteiner)

    PetsJSON.forEach((pet) => {
        const cardComponent = Card.createComponent(pet);
        cards.push(cardComponent); //карточки собираем в массив для переиспользования
    });

    for (let i = 0; i < 3; i++){ // 3 - количество блоков 
        const cardGroup = createElement("ul"); // создаем отдельный контейнер
        cardGroup.classList.add("our-friend__card-group")
        cardGroup.style.order = `${i + 1}`; // каждому контейнеру присваиваем нумерацию от 1 до 3
        cardConteiner.append(cardGroup); // в родительский контейнер cardConteiner мы добавляем каждую созданную нами группу карточек
    }

    for(let i = 0; i < countCard; i++){ // 3 - количество карточек в блоке для веба
        cardConteiner.children[1].append(cards[i]); // в контейнер добавляем одну карточку
        visibleCards.push(cards[i]); // помещаем сюда первые три карточки изначальные 
    }
    
    contentConteiner.append(blockContent)

    // стрелка вправо
    buttonRight = createElement("button", "our-friends__cards-arrow", "our-friends__cards-arrow_right");
    contentConteiner.append(buttonRight)

    // слушатель события на кнопки лево/право
    buttonLeft.addEventListener("click", buttonRightClickHandler);
    buttonRight.addEventListener("click", buttonLeftClickHandler);
    // отслеживание конца анимации
    cardConteiner.addEventListener("transitionend", endTransitionHandler)

    //  кнопка-ссылка на страницу питомцев
    const buttonLink = createElement("div", "our-friends__button-content")
    buttonLink.innerHTML = '<a class="button button_colored" href="../pets/index.html">Get to know the rest</a>'
    component.append(buttonLink)

    return component
}


    // конструктор для создания элементов
    // ...classes - значит, что класс может быть не один
    function createElement(tagName, ...classes){
        const element = document.createElement(tagName);
        element.classList.add(...classes);
        return element;
    }

    //обработчик клика на левую стрелку 
    function buttonLeftClickHandler(){
        if(!isRightClick){
            let rightCardGroup = null;
            // в цикле мы ищем блок с нужным нам индексом
            for(let group of cardConteiner.children) {
                // когда кликаем на левую стрелку, нам нужно найти значение с цифрой 3 
                if(Number(group.style.order) === indexVisibleGroup + 1) {
                    rightCardGroup = group;
                    break;
                }
            }
            // когда нашли следующий контейнер, который нам нужно запонить 
            while(rightCardGroup.firstElementChild) {
                // мы его очищаем 
                rightCardGroup.firstElementChild.remove();
            }
            const cardsToShow = getCardsToShow(); // мы получили некий набор карточек 
            visibleCards = new Array(...cardsToShow) // видимые карточки перезаписываются на новые карточки
             // добавляем карточки в новый контейнер 
            cardsToShow.forEach((card) => {
                rightCardGroup.insertAdjacentElement("beforeend", card);
            });
        }
        isLeftClick = true;
        isRightClick = !isLeftClick;
        deltaOrder = -1; // изменение значения ордер на -1 при перелистывании налево
        cardConteiner.classList.add("animate-left"); // анимация
        disableButtons()
    }

    //обработчик клика на правую  стрелку 
    function buttonRightClickHandler(){
        if(!isLeftClick){
            let leftCardGroup = null;
            // в цикле мы ищем блок с нужным нам индексом
            for(let group of cardConteiner.children) {
                // когда кликаем на правую стрелку, нам нужно найти значение с цифрой 1 
                if(Number(group.style.order) === indexVisibleGroup - 1) {
                    leftCardGroup = group;
                    break;
                }
            }
            // когда нашли следующий контейнер, который нам нужно запонить 
            while(leftCardGroup.firstElementChild) {
                // мы его очищаем 
                leftCardGroup.firstElementChild.remove();
            }
            const cardsToShow = getCardsToShow(); // мы получили некий набор карточек 
            visibleCards = new Array(...cardsToShow) // видимые карточки перезаписываются на новые карточки
            // добавляем карточки в новый контейнер 
            cardsToShow.forEach((card) => {
                leftCardGroup.insertAdjacentElement("beforeend", card);
            });
        }
        isRightClick = true;
        isLeftClick = !isRightClick;
        deltaOrder = 1
        cardConteiner.classList.add("animate-right"); // анимация
        disableButtons();
    }
    function disableButtons() {
        buttonLeft.setAttribute("disabled", "disabled");
        buttonRight.setAttribute("disabled", "disabled");
    }
    function enableButtons() {
        buttonLeft.removeAttribute("disabled");
        buttonRight.removeAttribute("disabled");
    }

    // обработчик завершения внимации 
    function endTransitionHandler(){
        // реализация изменения номера контейнера
        cardConteiner.classList.add("animate-notransition");
        for(const group of cardConteiner.children){
            let order = Number(group.style.order);
            order = order + deltaOrder;
            if(order <= 0) {
                order = countCard;
            } else if (order > countCard) {
                order = 1;
            }
            group.style.order = order;
        }
        cardConteiner.classList.remove("animate-left", "animate-right");
        setTimeout(() => {
            cardConteiner.classList.remove("animate-notransition");
            enableButtons();
        }, 1)
    }

    // формирует массив
    function getCardsToShow() {
        let cardsToShow = new Array(); // создаем массив, который будем отдавать 
        while (cardsToShow.length < countCard) { // пока массив меньше чем нужное кол-во карточек,
            const index = getRandomNumber(0, cards.length - 1); // получаем произвольный номер
            if(!visibleCards.includes(cards[index]) && !cardsToShow.includes(cards[index])) { // проверяем, есть ли эта карточка уже в нашем массиве (который видим сейчас) и есть ли эта карточка в массиве, который мы начали заполнять  
                cardsToShow.push(cards[index]); // если нет ни в одном массиве, пробрасываем эту карточку в массив
            }
        }
        // когда заполнятся все три карточки, возвращаем получившийся массив 
        return cardsToShow;
    }

    // отдает рандомное число от минимума до максимума 
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const renderPopupWind = (content) => {
        let popup = new Popup("popup")
        popup.buildPopup(content)
    }
      
    const getClickPets = (id) => {
        return PetsJSON.find(pet => pet.id == id)
    }
      
    const renderPetItemModalWimdow = (pet) => {
        let popup = new PetItemPopup("popup__content", pet)
        popup.renderPopup()
    }

      

export { createComponent };