const popupValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_disabled',
    inputErrorClass: 'popup__input_type_error',
     errorClass: 'popup__input-error_active'
 }



 // // Функция, которая добавляет класс с ошибкой
 // const showError = (formElement, inputElement, errorMessage, popupValidation) => {
 //     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
 //     inputElement.classList.add(popupValidation.inputErrorClass);
 //     errorElement.textContent = errorMessage;
 //     errorElement.classList.add(popupValidation.errorClass);
 // };

 // // Функция, которая удаляет класс с ошибкой
 // const hideError = (formElement, inputElement) => {
 //     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
 //     inputElement.classList.remove(popupValidation.inputErrorClass);
 //     errorElement.classList.remove(popupValidation.errorClass);
 //     errorElement.textContent = " ";
 // };

 // // Функция, которая проверяет валидность поля
 // const checkInputValidity = (formElement, inputElement, popupValidation) => {
 //     if (!inputElement.validity.valid) {
 //         showError(formElement, inputElement, inputElement.validationMessage, popupValidation);
 //     } else {
 //         hideError(formElement, inputElement, popupValidation);
 //     }
 // };


 // const setEventListeners = (formElement, popupValidation) => {
 //     const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
 //     const buttonElement = formElement.querySelector(popupValidation.submitButtonSelector);
 //     toggleButtonState(inputList, buttonElement, popupValidation);
 //     inputList.forEach((inputElement) => {
 //         inputElement.addEventListener('input', function () {
 //             checkInputValidity(formElement, inputElement, popupValidation);
 //             toggleButtonState(inputList, buttonElement, popupValidation);
 //         });
 //     });
 // };

 // function enableValidation(popupValidation) {
 //     const formElementList = document.querySelectorAll(popupValidation.formSelector);
 //     formElementList.forEach((formElement) => {
 //         setEventListeners(formElement, popupValidation);
 //     });
 // };

 // function hasInvalidInput(inputList) {
 //     return inputList.some((inputElement) => {
 //         return !inputElement.validity.valid;
 //     });
 // };

 //функция, которая делает кнопку неактивной 
 // function makeButtonDisabled(buttonElement, popupValidation) {
 //     buttonElement.classList.add(popupValidation.inactiveButtonClass);
 //     buttonElement.disabled = true
 // }

 // function toggleButtonState(inputList, buttonElement, popupValidation) {
 //     if (hasInvalidInput(inputList)) {
 //         makeButtonDisabled(buttonElement, popupValidation)
 //     } else {
 //         buttonElement.classList.remove(popupValidation.inactiveButtonClass);
 //         buttonElement.disabled = false;
 //     }
 // };

 //функция, которая сбрасывает кнопку "сохранить"
 //используется в index.js
 // function resetButtonSave(popup, popupValidation) {
 //     const buttonElement = popup.querySelector(popupValidation.submitButtonSelector);
 //     makeButtonDisabled(buttonElement, popupValidation)
 // };


 class Validity {
     constructor (popupValidation, formElement) {
         this._form = popupValidation;
         this._formElement = formElement;
         this._inputArray =  Array.from(this._formElement.querySelectorAll(this._form.inputSelector));
         this._submit = this._formElement.querySelector(this._form.submitButtonSelector);

     }

 // Функция, которая добавляет класс с ошибкой
 _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._form.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._form.errorClass);
}

// Функция, которая удаляет класс с ошибкой
_hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._form.inputErrorClass);
    errorElement.classList.remove(this._form.errorClass);
    errorElement.textContent = " ";
};

  // Функция, которая проверяет валидность поля
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {this._showError(inputElement, inputElement.validationMessage);
    } else {this._hideError(inputElement);
    }
};
_setEventListeners () {
    // const buttonElement = formElement.querySelector(popupValidation.submitButtonSelector);
    this._toggleButtonState();
    this._inputArray.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        });
    });
};

_enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
};
_hasInvalidInput () {
    return this._inputArray.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
_makeButtonDisabled() {
    this._submit.classList.add(this._form.inactiveButtonClass);
    this._submit.disabled = true;
}
_toggleButtonState() {
    if (this._hasInvalidInput()) {
        this._makeButtonDisabled()
    } else {
        this._submit.classList.remove(this._form.inactiveButtonClass);
        this._submit.disabled = false;
    }
};
}
const formProfileValidity = new Validity (popupValidation, formEdit);
 formProfileValidity._enableValidation();
 const formAddValidity = new Validity (popupValidation, formAdd);
 formAddValidity._enableValidation();
 // enableValidation(popupValidation); 