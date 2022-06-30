import Card from './Card.js';
import {initialCards} from "./cards.js";
import FormValidator from './FormValidator.js';
const editBtnProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_for_edit');
const popupAddCard = document.querySelector('.popup_for_add');
const formEdit = document.querySelector('[name=form-info]');
const formAdd = document.querySelector('[name=form-add]');
const nameInput = document.querySelector('[name=name]');
const infoInput = document.querySelector('[name=info]');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const addBtnImage = document.querySelector('.profile__add-button');
const titleImage = document.querySelector('[name=title]');
const linkImage = document.querySelector('[name=link]');
const blockCards = document.querySelector('.elements');
const allPopups = Array.from(document.querySelectorAll('.popup'));
export const popupElement = document.querySelector('.popup_for_img');
export const popupImage = document.querySelector('.popup__img');
export const popupImageTitle = document.querySelector('.popup__info-img');
export const popupCloseButton = document.querySelector('.popup__close_for_img');
const popups = document.querySelectorAll('.popup')

const popupValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const formValidators = {}

// Включение валидации
const enableValidation = (popupValidation) => {
  const formList = Array.from(document.querySelectorAll(popupValidation.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(popupValidation, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')
   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageTitle.textContent = name;
  openModalWindow(popupElement);
}

//закрытие попапа через Escape
export function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closeModalWindow(popup);
  };
};

//открытие попапа
function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
};

//закрытие попапа
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
};

//закрытие попапа через клик на overlay
function closeClickOnOverlay() {
  allPopups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closeModalWindow(evt.target);
      };
    });
  });
};

//открытие попапа редактирования профиля
function handleEditPopupOpen() {
  openModalWindow(popupEditProfile);
  infoInput.value = profileInfo.textContent;
  nameInput.value = profileName.textContent;
  formValidators['form-info'].resetValidation()
  formValidators['form-info'].makeButtonDisabled()
  // formEditValidity.resetValidation();
  // formEditValidity.makeButtonDisabled();
};

//открытие попапа добавления карточки
function handleAddCardPopupOpen() {
  openModalWindow(popupAddCard);
  formAdd.reset();
  formValidators['form-add'].resetValidation()
  // formAddValidity.resetValidation();
};

//форма отправки имени и инфо
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closeModalWindow(popupEditProfile);
};

//функция генерации карточки
function createCard(title, link) {
  const card = new Card(title, link, '.img-template', handleCardClick);
  const cardElement = card.generateCard()
  return cardElement;
};

//вызов функции добавления картинки через кнопку add
formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const title = titleImage.value;
  const link = linkImage.value;
  const card = createCard(title, link)
  blockCards.prepend(card);
  evt.target.reset();
  closeModalWindow(popupAddCard);
  formValidators['form-add'].makeButtonDisabled()
  //formAddValidity.makeButtonDisabled();
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          closeModalWindow(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closeModalWindow(popup)
        }
    })
});

initialCards.forEach((item) => {
  const cardElement = createCard(item.name, item.link)
  blockCards.prepend(cardElement);
});

addBtnImage.addEventListener('click', handleAddCardPopupOpen);
editBtnProfile.addEventListener('click', handleEditPopupOpen);
formEdit.addEventListener('submit', handleEditFormSubmit);
enableValidation(popupValidation);

// Геннадий, огромное спасибо за такое подробное и молниеносное ревью!