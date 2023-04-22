import * as Showcase from "../showcase/showcase.js"

let component = null;
let buttonFirst = null;
let buttonPrev = null;
let buttonCurrent = null;
let buttonNext = null;
let buttonLast = null;

let countPage = 0;
let currentPage = 1;

// проверка на валидность 
function createComponent(count) {
    if(typeof (count) !== "number" || count < 0) {
        throw new TypeError("Pagination error. Count page is invalid.");
    }
    countPage = count;
    component = createElement("div", "our-friends__button-content");

    buttonFirst = createElement("button", "our-friends__button", "our-friends__button_two-step", "button", "button_bordered")
    buttonFirst.textContent = "<<"

    buttonPrev = createElement("button", "our-friends__button", "our-friends__button_one-step", "button", "button_bordered")
    buttonPrev.textContent = "<"

    buttonNext = createElement("button", "our-friends__button", "our-friends__button_one-step", "button", "button_bordered")
    buttonNext.textContent = ">"

    buttonLast = createElement("button", "our-friends__button", "our-friends__button_two-step", "button", "button_bordered")
    buttonLast.textContent = ">>"

    buttonCurrent = createElement("button", "our-friends__button", "button", "button_colored");
    buttonCurrent.textContent = currentPage;

    component.append(buttonFirst, buttonPrev, buttonCurrent, buttonNext, buttonLast);

    buttonFirst.addEventListener("click", buttonFirstClickhandler);
    buttonPrev.addEventListener("click", buttonPrevClickhandler);
    buttonNext.addEventListener("click", buttonNextClickhandler);
    buttonLast.addEventListener("click", buttonLastClickhandler);

    setStatusButton();

    return component;
}

// конструктор для создания элементов
    // ...classes - значит, что класс может быть не один
    function createElement(tagName, ...classes){
        const element = document.createElement(tagName);
        element.classList.add(...classes);
        return element;
    }

function buttonFirstClickhandler() {
    currentPage = 1;
    buttonCurrent.textContent = currentPage;
    setStatusButton();
    Showcase.showPage(currentPage);
}

function buttonPrevClickhandler() {
    if(currentPage > 1) {
        currentPage -= 1;
        buttonCurrent.textContent = currentPage;
        setStatusButton();
        Showcase.showPage(currentPage);
    }
}

function buttonNextClickhandler() {
    if(currentPage < countPage) {
        currentPage +=1;
        buttonCurrent.textContent = currentPage;
        setStatusButton();
        Showcase.showPage(currentPage);
    }
}

function buttonLastClickhandler() {
    currentPage = countPage;
    buttonCurrent.textContent = currentPage;
    setStatusButton();
    Showcase.showPage(currentPage)
}

function setStatusButton() {
    if(currentPage === 1) {
        buttonFirst.setAttribute("disabled", true);
        buttonPrev.setAttribute("disabled", true)
    } else {
        buttonFirst.removeAttribute("disabled");
        buttonPrev.removeAttribute("disabled")
    }
    if(currentPage === countPage) {
        buttonLast.setAttribute("disabled", true);
        buttonNext.setAttribute("disabled", true)
    } else {
        buttonLast.removeAttribute("disabled");
        buttonNext.removeAttribute("disabled")
    }
}

export { createComponent }