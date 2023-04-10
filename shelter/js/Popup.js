export class Popup {
  constructor (classes) {
    this.classes = classes;
    // сразу все обнуляем
    this.overlay = " "
    this.popup = " ";
    this.popupWrapper = ""
    this.popupContent = " ";
    this.popupClose = " "
  }
  buildPopup(content){
    this.overlay = this.createPopupDom(this.overlay, "div", "overlay", "popup__active")
    this.popup = this.createPopupDom(this.popup, "div", this.classes);
    this.popupWrapper = this.createPopupDom(this.popupWrapper, "div", "popup__wrapper")
    this.popupContent = this.createPopupDom(this.popupContent, "div", "popup__content");
     this.popupClose = this.createPopupDom(this.popupClose, "img", "popup__close");
     this.popupClose.setAttribute('src', "../../img/close-bnt.svg")
     this.popupClose.setAttribute('alt', "close")
    this.setContent(content);

    this.appendPopupElements();

    //bind events
    this.bindEvents();

    this.openPopup()
  }

  createPopupDom (node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes)
    return node;
  }

  setContent(content) {
    if(typeof content === "string") {
      this.popupContent.innerHTML = content;
    } else {
      this.popupContent.innerHTML = " ";
      this.popupContent.appendChild(content);
    }
  }

  appendPopupElements() {
    this.overlay.append(this.popup)
    this.popup.append(this.popupWrapper);
    this.popupWrapper.append(this.popupClose);
    this.popupWrapper.append(this.popupContent);
  }

  bindEvents(){
    //this.popupClose.addEventListener("click", this.closePopup)
    this.overlay.addEventListener("click", this.closePopup)
  }

  openPopup() {
    document.body.append(this.overlay);
    
  }
  closePopup(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('popup__close')) {
      document.querySelector('.overlay').remove();
      
    }
  }
}