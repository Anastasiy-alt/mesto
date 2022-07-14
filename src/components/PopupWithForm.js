import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submit) {
        super(popupSelector);
        this._submit = submit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupInput = this._popupForm.querySelectorAll('.popup__item');
    }

    _getInputValues() {
        const inputData = {};
        this._popupInput.forEach(input => {
            inputData[input.name] = input.value;
        });
        return inputData;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}