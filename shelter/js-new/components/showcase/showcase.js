import * as Card from "../card/card.js"
import * as Counter from "../counter/counter.js"
import { PetsJSON } from "../../../data/pets.js";
import { PetItemPopup } from "../petItemPopup/petItemPopup.js";
import { Popup } from "../popup/popup.js"; 

const countPage = 6; 

let showcaseElement = null;
let cardComponents = new Array();
let petsPage = new Array();

// проверка на масив
function createComponent(PetsJSON) {
    if(!Array.isArray(PetsJSON)) {
        throw TypeError("Pagination error. Pets array is invalid");
    }
    const component = document.createElement("div");
    component.classList.add("wrapper");

    //<h2 class="our-friends__title">Our friends who<br>are looking for a house</h2>

    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("our-friends__title");
    sectionTitle.innerText = "Our friends who\nare looking for a house";

    showcaseElement = document.createElement("ul");
    showcaseElement.classList.add("our-friends__cards");

    showcaseElement.addEventListener("click", (e) => {
        if(e.target.closest(".our-friends__card")) {
          let clickPetItemId = e.target.closest(".our-friends__card").getAttribute("data-id");
         // console.log(clickPetItemId)
         let clickPetItemPets = getClickPets(clickPetItemId);
    
         renderPetItemModalWimdow(clickPetItemPets)
        }
      })

    petsPage.push(PetsJSON);

    for(let i = 1; i < countPage; i +=1) {
        const newPetsPage = createRandomPets(petsPage[i - 1].reverse());
        petsPage.push(newPetsPage);
    }
    petsPage[0].forEach((pet) => {
        const  cardComponent = Card.createComponent(pet);
        showcaseElement.append(cardComponent);
        cardComponents.push(cardComponent);
    });

    const counterComponent = Counter.createComponent(6);
    component.append(sectionTitle, showcaseElement, counterComponent);

    return component; 
}

function showPage(number) {
    showcaseElement.style.opacity = "0";

    for( let i = 0; i < cardComponents.length; i++){
        Card.changeComponent(cardComponents[i], petsPage[number - 1][i]);
    }
    showcaseElement.style.opacity = "1"
}

function createRandomPets(pets) {
    let petsSourse = new Array(...pets);
    let petsResult = new Array();

    while(petsSourse.length > 0) {
        const index = getRandomNumber(0, petsSourse.length - 1);
        const pet = petsSourse.splice(index, 1);
        petsResult.push(...pet);
    }

    return petsResult
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


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


export { createComponent, showPage }


