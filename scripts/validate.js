const popupValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

// Функция, которая добавляет класс с ошибкой
const showError = (formElement, inputElement, errorMessage, popupValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(popupValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(popupValidation.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(popupValidation.inputErrorClass);
    errorElement.classList.remove(popupValidation.errorClass);
    errorElement.textContent = " ";
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement, popupValidation) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, popupValidation);
    } else {
        hideError(formElement, inputElement, popupValidation);
    }
};


const setEventListeners = (formElement, popupValidation) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector(popupValidation.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, popupValidation);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, popupValidation);
            toggleButtonState(inputList, buttonElement, popupValidation);
        });
    });
};

function enableValidation(popupValidation) {
    const formElementList = document.querySelectorAll(popupValidation.formSelector);
    formElementList.forEach((formElement) => {
        setEventListeners(formElement, popupValidation);
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

//функция, которая делает кнопку неактивной 
function makeButtonDisabled(buttonElement, popupValidation) {
    buttonElement.classList.add(popupValidation.inactiveButtonClass);
    buttonElement.disabled = true
}

function toggleButtonState(inputList, buttonElement, popupValidation) {
    if (hasInvalidInput(inputList)) {
        makeButtonDisabled(buttonElement, popupValidation)
    } else {
        buttonElement.classList.remove(popupValidation.inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

//функция, которая сбрасывает кнопку "сохранить"
//используется в index.js
function resetButtonSave(popup, popupValidation) {
    const buttonElement = popup.querySelector(popupValidation.submitButtonSelector);
    makeButtonDisabled(buttonElement, popupValidation)
};

enableValidation(popupValidation);