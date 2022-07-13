import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imgLink = this._popup.querySelector('.popup__img');
        this._imgName = this._popup.querySelector('.popup__info-img');
    }

    open(name, link) {
        this._imgLink.src = link;
        this._imgLink.alt = name;
        this._imgName.textContent = name;
        super.open();
    }
}