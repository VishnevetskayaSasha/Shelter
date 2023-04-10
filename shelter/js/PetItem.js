// Вывод карточек на страницу
// заранее пишем класс, который будет формировать наш полноценный объект из массива
export class PetItem{
  constructor({id, name, img}){ // передаем необходимые параметры
      this.id = id
      this.name = name;
      this.img = img;
    }
  
  generatePetInem(){
    let templete = " ";
    let petItem = document.createElement("div");
    petItem.className = "our-friends__card";
    petItem.setAttribute("data-id", this.id);

    // if this.img - true к templete добавляем html
    this.img &&
    (templete += ` <img src="${this.img}" alt="${this.name}" class="our-friends__card-img">`)
    this.name &&
    (templete += `<p class="our-friends__card-text">${this.name}</p>
                   <button class="button button_bordered">Learn more</button>`)

    petItem.innerHTML = templete;
    return petItem;
  }

  
}