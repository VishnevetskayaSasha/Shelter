import { Popup } from "../popup/popup.js";


//наш новый класс наследуюет класс попап
export class PetItemPopup extends Popup {
  constructor (classes, {id, name, img, type, breed, description, age, inoculations, diseases,  parasites}) {
    super(classes)
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }
  generateContent(){
    let templete = " ";
    let petItem = document.createElement("div");
    petItem.className = "popup__content";

    templete += `
                  <img class="popup__img" src="${this.img}" alt="${this.name}">
                  <div class="popup__text-content">
                    <h2 class="popup__title">${this.name}</h2>
                    <h3 class="popup__sub-title">${this.type} - ${this.breed}</h3>
                    <p class="popup__tetxt">${this.description}</p>
                    <ul class="popup__list">
                      <li class="popup__item"><span class="popup__item-titel">Age: </span>${this.age}</li>
                      <li class="popup__item"><span class="popup__item-titel">Inoculations: </span>${this.inoculations}</li>
                      <li class="popup__item"><span class="popup__item-titel">Diseases: </span>${this.diseases}</li>
                      <li class="popup__item"><span class="popup__item-titel">Parasites: </span>${this.parasites}</li>
                    </ul>
                  </div>
                `

    petItem.innerHTML = templete;
    //console.log(petItem)
    return petItem;
  }
  renderPopup() {
    let content = this.generateContent();
   // console.log(content)
    super.buildPopup(content);
  }
}