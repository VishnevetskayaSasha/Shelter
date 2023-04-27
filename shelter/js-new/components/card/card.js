const textButton = "Learn more";
import * as Pet from "../pet/pet.js"

function createComponent(pet) { // для отдельного питомца с отдельной карточкой
    //проверка валидации
    Pet.validatePet(pet);

    // отдельная карточка 
    const component = document.createElement("li");
    component.classList.add("our-friends__card");
    component.setAttribute("data-id", pet.id);

    // картинка карточки
    const image = document.createElement("img");
    image.classList.add("our-friends__card-img");
    image.src = pet.img;
    image.alt = pet.name;

    // имя питомца
    const name = document.createElement("p");
    name.classList.add("our-friends__card-text");
    name.textContent = pet.name;

    const block = document.createElement("div");
    block.append(image, name)

    // кнопка Learn more
    const button = document.createElement("button");
    button.classList.add("button", "button_bordered");
    button.textContent = textButton;

    component.append(block, button)
    return component
}
function changeComponent(card, pet) {
    const cardInfo = card.firstElementChild;
    cardInfo.firstElementChild.src =  pet.img;
    cardInfo.firstElementChild.alt = pet.name;
    cardInfo.lastElementChild.textContent = pet.name;
    card.setAttribute("data-id", pet.id);
}

export { createComponent, changeComponent  }