import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popup) {
    super(popup);
    this._yesDeleteButton = this._popup.querySelector('.popup__button_for_delete');
  }

  submitDelete(evt) {
    this._submitDelete = evt;
  }

  setEventListeners() {
    super.setEventListeners();
    this._yesDeleteButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._submitDelete();
    });
  }
}