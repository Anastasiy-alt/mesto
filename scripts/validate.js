// const form = document.querySelector('.popup__form');
// const formInput = form.querySelector('.popup__item');
// // const formError = form.querySelector(`.${formInput.id}-error`);
// // const popup = document.querySelectorAll('.popup');

// // Функция, которая добавляет класс с ошибкой
// const showError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('popup__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__input-error_active');
// };

// // Функция, которая удаляет класс с ошибкой
// const hideError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('popup__input_type_error');
//     errorElement.classList.remove('popup__input-error_active');
//     errorElement.textContent = " ";
// };

// // Функция, которая проверяет валидность поля
// const checkInputValidity = (formElement, inputElement) => {
//     if (!formInput.validity.valid) {
//         showError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//         hideError(formElement, inputElement);
//     }
// };


// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
//     const buttonElement = formElement.querySelector('.popup__button');
//     toggleButtonState(inputList, buttonElement);
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', function () {
//             checkInputValidity(formElement, inputElement);
//             toggleButtonState(inputList, buttonElement);
//         });
//     });
// };

// function enableValidation(popup) {
//     const formElement = popup.querySelector('.popup__form');
//     const fieldSet = formElement.querySelector('.popup__input');
//     setEventListeners(fieldSet);

// };

// function hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };

// function toggleButtonState(inputList, buttonElement) {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('popup__button_type_disabled');
//     } else {
//         buttonElement.classList.remove('popup__button_type_disabled');
//     }
// }

// enableValidation(popupEdit);
// enableValidation(popupAdd);


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

const form = document.querySelector(formSelector);
const formInput = form.querySelector('.popup__item');


// Функция, которая добавляет класс с ошибкой
const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = " ";
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
    if (!formInput.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement);
    }
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation(popup) {
    const formElement = popup.querySelector(formSelector);
    const fieldSet = formElement.querySelector('.popup__input');
    setEventListeners(fieldSet);

};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_type_disabled');
    } else {
        buttonElement.classList.remove('popup__button_type_disabled');
    }
}