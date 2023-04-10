console.log("Cамооценкa - 100 баллов - работа выполнена четко по ТЗ")
import { PetItem } from "./PetItem.js";
import { Popup } from "./Popup.js";
import { PetItemPopup } from "./PetItemPopup.js";
// бургер 
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const menuList = document.querySelector(".header__menu-list");
const menuItem = menuList.querySelectorAll("li");
const menuLink = menuList.querySelectorAll("a");

document.addEventListener("click", function(event){
  // все открытое меню
  const clickOnMenu = event.composedPath().includes(menuList);
  // иконка бургера
  const clickOnHamburger = event.composedPath().includes(hamburger);
  // если клик на бургер - открываем меню
  if (clickOnHamburger) {
    document.body.classList.toggle("lock");
    hamburger.classList.toggle("hamburger_open");
    //menuList.classList.toggle("header__menu-mob");
    menuList.classList.toggle("header__menu-mob_active");
    menu.classList.toggle("header__menu_active");
    for(let i = 0; i < menuItem.length; i += 1) {
      menuItem.item(i).classList.toggle("header__menu-item_mob");
    }
  
    for(let i = 0; i < menuLink.length; i += 1) {
      menuLink.item(i).classList.toggle("header__menu-link_mob");
    } // если клик не на открытое меню - закрываем меню
   } else if (!clickOnMenu) {
      document.body.classList.remove("lock")
      hamburger.classList.remove("hamburger_open");
     // menuList.classList.remove("header__menu-mob");
      menuList.classList.remove("header__menu-mob_active");
      menu.classList.remove("header__menu_active");
      for(let i = 0; i < menuItem.length; i += 1) {
        menuItem.item(i).classList.remove("header__menu-item_mob");
      }
    
      for(let i = 0; i < menuLink.length; i += 1) {
        menuLink.item(i).classList.remove("header__menu-link_mob");
      }
    }
})

// если клик на ссылку в открытом меню - закрываем меню
for(let i = 0; i < menuLink.length; i += 1) {
  menuLink.item(i).addEventListener("click", function(){
    document.body.classList.remove("lock")
    hamburger.classList.remove("hamburger_open");
   // menuList.classList.remove("header__menu-mob");
    menuList.classList.remove("header__menu-mob_active");
    menu.classList.remove("header__menu_active");
    for(let i = 0; i < menuItem.length; i += 1) {
      menuItem.item(i).classList.remove("header__menu-item_mob");
    }
    for(let i = 0; i < menuLink.length; i += 1) {
      menuLink.item(i).classList.remove("header__menu-link_mob");
    }
  })
}

// запрет на клик по ссылке в меню 
const menuLinkActive = document.querySelector(".header__menu-link_active");
menuLinkActive.addEventListener("click", function(event) {
  event.preventDefault()
})

// pets json
let pets = 
[
 {
   "id": 1,
   "name": "Jennifer",
   "img": "../../img/pets-jennifer.png",
   "type": "Dog",
   "breed": "Labrador",
   "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
   "age": "2 months",
   "inoculations": ["none"],
   "diseases": ["none"],
   "parasites": ["none"]
 },
 {
   "id": 2,
   "name": "Sophia",
   "img": "../../img/pets-sophia.png",
   "type": "Dog",
   "breed": "Shih tzu",
   "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
   "age": "1 month",
   "inoculations": ["parvovirus"],
   "diseases": ["none"],
   "parasites": ["none"]
 },
 {
   "id": 3,
   "name": "Woody",
   "img": "../../img/pets-woody.png",
   "type": "Dog",
   "breed": "Golden Retriever",
   "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
   "age": "3 years 6 months",
   "inoculations": ["adenovirus", "distemper"],
   "diseases": ["right back leg mobility reduced"],
   "parasites": ["none"]
 },
 {
  "id": 4,
   "name": "Scarlett",
   "img": "../../img/pets-scarlet.png",
   "type": "Dog",
   "breed": "Jack Russell Terrier",
   "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
   "age": "3 months",
   "inoculations": ["parainfluenza"],
   "diseases": ["none"],
   "parasites": ["none"]
 },
 {
   "id": 5,
   "name": "Katrine",
   "img": "../../img/pets-katrine.svg",
   "type": "Cat",
   "breed": "British Shorthair",
   "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
   "age": "6 months",
   "inoculations": ["panleukopenia"],
   "diseases": ["none"],
   "parasites": ["none"]
 },
 {
   "id": 6,
   "name": "Timmy",
   "img": "../../img/pets-timmy.png",
   "type": "Cat",
   "breed": "British Shorthair",
   "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
   "age": "2 years 3 months",
   "inoculations": ["calicivirus", "viral rhinotracheitis"],
   "diseases": ["kidney stones"],
   "parasites": ["none"]
 },
 {
   "id": 7,
   "name": "Freddie",
   "img": "../../img/pets-freddie.png",
   "type": "Cat",
   "breed": "British Shorthair",
   "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
   "age": "2 months",
   "inoculations": ["rabies"],
   "diseases": ["none"],
   "parasites": ["none"]
 },
 {
   "id": 8,
   "name": "Charly",
   "img": "../../img/pets-charly.png",
   "type": "Dog",
   "breed": "Jack Russell Terrier",
   "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
   "age": "8 years",
   "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
   "diseases": ["deafness", "blindness"],
   "parasites": ["lice", "fleas"]
 }
]
//console.log(pets[0])


// попап 
// рендер карточек питомцев
const renderPetsToDom = () => {
  let petsWrapper = getPetWrapper();
  generatePetsInem(pets).forEach(petItem => {
    petsWrapper.append(petItem.generatePetInem())
  })

  addPetItemClickHandler()
}

// обнуляем html
const getPetWrapper = () => {
  const petsConteiner = document.querySelector(".our-friends__cards-box")
  petsConteiner.innerHTML = "";
  return petsConteiner;
}

// генерация petsIrem
const generatePetsInem = (pets) => {
  let petsItem = [];
  pets.forEach(petItem => {
    petsItem.push(new PetItem(petItem))
  })
  return petsItem;
}

// const addToolsClickHandler = () => {
//   let test = document.querySelector(".our-friends__card");
//   test.addEventListener("click", () => {
//     generateToolsPopup();
//   })
// }

// const generateToolsPopup = () => {
//   renderPopupWind("test")
// }

const renderPopupWind = (content) => {
  let popup = new Popup("popup")
  popup.buildPopup(content)
}

const addPetItemClickHandler = () => {
  document.querySelector(".our-friends__cards-box").addEventListener("click", (e) => {
    if(e.target.closest(".our-friends__card")) {
      let clickPetItemId = e.target.closest(".our-friends__card").getAttribute("data-id");
     // console.log(clickPetItemId)
     let clickPetItemPets = getClickPets(clickPetItemId);

     renderPetItemModalWimdow(clickPetItemPets)
    }
  })
}

const getClickPets = (id) => {
  return pets.find(petItem => petItem.id == id)
}

const renderPetItemModalWimdow = (petItem) => {
  let popup = new PetItemPopup("popup__content", petItem)
  popup.renderPopup()

}

const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");
const popupOverlay = document.querySelector(".overlay");
const popupContent = document.querySelector(".popup__content");
const popupActive = document.querySelector(".popup__active");



// const cardBlock = document.querySelector(".our-friends__cards-box");
//   const cardForClick = cardBlock.querySelectorAll(".our-friends__card");
  
  // console.log(cardForClick)
  // открытие по клику на карточку и закрытие по клику вне попапа
//   document.addEventListener("click", function(event){
//   const clickOnPopup = event.composedPath().includes(popupWrapper)
  
  
//   for(let i = 0; i < cardForClick.length; i += 1) {
//     //console.log(cardForClick)
//     console.log(cardForClick.item(i))
//     const clickOnTest = event.composedPath().includes(cardForClick.item(i));
//     //console.log(clickOnTest)
//     if(clickOnTest){
//       console.log(cardForClick.item(i))
//       popup.classList.add("popup__active");
//       document.body.classList.add("popup___open");
//     } else if (!clickOnPopup) {
//       popup.classList.remove("popup__active");
//       document.body.classList.remove("popup___open");
//     } 
//   } 
// }) 


// const card = document.querySelectorAll(".our-friends__card");
// console.log(card)
// for(let i = 0; i < card.length; i += 1) {
//   let cardItem = card.item[i]
//   cardItem.addEventListener("click", function(){
//     document.querySelector("body").classList.toggle("popup__open")
//   })
// }





// размеры экрана
const widthScreenDesk = 1280;
const widthScreenTablet = 768;
const widthScreenMob = 320;

// кол-во карточек на странице
const numberOfCardDesk = 3; 
const numberOfCardTablet = 2;
const numberOfCardMob = 1;

// сколько карточек добавляется
const moreCardDesc = 3; 
const moreCardTablet = 2; 
const moreCardMob= 1;

let leftArr = [];
let mainArr = [];
let rightItems = [];

 window.onload = function() {
//   init() // когда загрузится весь документ, начнет работь init - записываем это в самый конец js 
  if(pets) {
    renderPetsToDom();
  }
  //addToolsClickHandler();
}