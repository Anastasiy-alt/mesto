export default class Validity {
    constructor(formClassList, form) {
        this._form = formClassList;
        this._formElement = form;
        // this._inputArray = Array.from(this._formElement.querySelectorAll(this._form.inputSelector));
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__item'));
        this._buttonElement = this._formElement.querySelector(this._form.submitButtonSelector);
    };

    // Функция, которая добавляет класс с ошибкой
    _showError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._form.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._form.errorClass);
    };

    // Функция, которая удаляет класс с ошибкой
    _hideError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._form.inputErrorClass);
        errorElement.classList.remove(this._form.errorClass);
        errorElement.textContent = " ";
    };

    // Функция, которая проверяет валидность поля
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hideError(inputElement);
        }
    };

    _setEventListeners() {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });
    };

    enableValidation() {
        // const formElementList = document.querySelectorAll(popupValidation.formSelector);
        // formElementList.forEach((formElement) => {
        //     setEventListeners(formElement, popupValidation);
        // });
        this._setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    //функция, которая делает кнопку неактивной 
    makeButtonDisabled() {
        this._buttonElement.classList.add(this._form.inactiveButtonClass);
        this._buttonElement.disabled = true
    };

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.makeButtonDisabled()
        } else {
            this._buttonElement.classList.remove(this._form.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

}

// const formEditValidity = new Validity (popupValidation, formEdit);
// formEditValidity.enableValidation();
// const formAddValidity = new Validity (popupValidation, formAdd);
// formAddValidity.enableValidation();

// //функция, которая сбрасывает кнопку "сохранить"
// //используется в index.js
// function resetButtonSave(popup, popupValidation) {
//     const buttonElement = popup.querySelector(popupValidation.submitButtonSelector);
//     buttonElement.classList.add(popupValidation.inactiveButtonClass);
//      buttonElement.disabled = true
// };
