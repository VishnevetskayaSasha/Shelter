console.log("Cамооценкa - 100 баллов - работа выполнена четко по ТЗ")

// бургер 
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const menuList = document.querySelector(".header__menu-list");
const menuItem = menuList.querySelectorAll("li");
const menuLink = menuList.querySelectorAll("a");

// hamburger.addEventListener("click", function(){
//   document.body.classList.toggle("lock")
//   hamburger.classList.toggle("hamburger_open");
//   menuList.classList.toggle("header__menu-mob");
//   menuList.classList.toggle("header__menu-mob_active");
//   menu.classList.toggle("header__menu_active");
 
//   for(let i = 0; i < menuItem.length; i += 1) {
//     menuItem.item(i).classList.toggle("header__menu-item_mob");
//   }

//   for(let i = 0; i < menuLink.length; i += 1) {
//     menuLink.item(i).classList.toggle("header__menu-link_mob");
//   }
// })

document.addEventListener("click", function(event){
  // все открытое меню
  const clickOnMenu = event.composedPath().includes(menuList);
  // иконка бургера
  const clickOnHamburger = event.composedPath().includes(hamburger);
  // если клик на бургер - открываем меню
  if (clickOnHamburger) {
    document.body.classList.toggle("lock")
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







