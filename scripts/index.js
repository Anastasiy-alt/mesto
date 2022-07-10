import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import Popup from './Popup.js';
import UserInfo from './UserInfo.js';

import { initialCards } from "./cards.js";
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
const titleImageInput = document.querySelector('[name=title]');
const linkImageInput = document.querySelector('[name=link]');
const blockCards = document.querySelector('.elements');
const allPopups = Array.from(document.querySelectorAll('.popup'));
const imagePopup = document.querySelector('.popup_for_img');
const popupImage = document.querySelector('.popup__img');
const popupImageTitle = document.querySelector('.popup__info-img');

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

// function handleCardClick(name, link) {
//   popupImage.src = link;
//   popupImage.alt = name;
//   popupImageTitle.textContent = name;
//   openModalWindow(imagePopup);
// }

//закрытие попапа через Escape
// function closeEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     closeModalWindow(popup);
//   };
// };

//открытие попапа
// function openModalWindow(modalWindow) {
//   modalWindow.classList.add('popup_opened');
//   document.addEventListener('keydown', closeEsc);
// };

//закрытие попапа
// function closeModalWindow(modalWindow) {
//   modalWindow.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeEsc);
// };

//открытие попапа редактирования профиля
// function handleEditPopupOpen() {
//   openModalWindow(popupEditProfile);
//   infoInput.value = profileInfo.textContent;
//   nameInput.value = profileName.textContent;
//   formValidators['form-info'].resetValidation()
//   formValidators['form-info'].makeButtonDisabled()
// };

//открытие попапа добавления карточки
// function handleAddCardPopupOpen() {
//   openModalWindow(popupAddCard);
//   formAdd.reset();
//   formValidators['form-add'].resetValidation()
// };

//форма отправки имени и инфо
// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileInfo.textContent = infoInput.value;
//   closeModalWindow(popupEditProfile);
// };

addBtnImage.addEventListener('click', handleAddCardPopupOpen);
editBtnProfile.addEventListener('click', handleEditPopupOpen);
enableValidation(popupValidation);

function handleAddCardPopupOpen() {
  const popupClass = new Popup(popupAddCard);
  popupClass.open();
  formAdd.reset();
  formValidators['form-add'].resetValidation();
  popupClass.setEventListeners();
};

//функция генерации карточки здесь изменить вызов класса
function createCard(title, link) {
  const zoomImg = new PopupWithImage(imagePopup);
  const card = new Card(title, link, '.img-template', zoomImg.handleCardClick);
  const cardElement = card.generateCard()
  return cardElement;
};

//вызов функции добавления картинки через кнопку add
formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const title = titleImageInput.value;
  const link = linkImageInput.value;
  const card = createCard(title, link);
  blockCards.prepend(card);
  evt.target.reset();
  closeModalWindow(popupAddCard);
});

// allPopups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//           closeModalWindow(popup)
//         }
//         if (evt.target.classList.contains('popup__close')) {
//           closeModalWindow(popup)
//         }
//     })
// });

initialCards.forEach((item) => {
  const cardElement = createCard(item.name, item.link)
  blockCards.prepend(cardElement);
});

const editProfile = new UserInfo(profileName.textContent, profileInfo.textContent);
console.log(nameInput.value, infoInput.value);

function handleEditPopupOpen() {
  const popupClass = new Popup(popupEditProfile);
  popupClass.open();
  editProfile.getUserInfo();
  formValidators['form-info'].resetValidation();
  formValidators['form-info'].makeButtonDisabled();
  popupClass.setEventListeners();
};

function handleEditFormSubmit(evt) {
  const popupClass = new Popup(popupEditProfile);
  evt.preventDefault();
  editProfile.setUserInfo()
  popupClass.close();
};

formEdit.addEventListener('submit', handleEditFormSubmit);