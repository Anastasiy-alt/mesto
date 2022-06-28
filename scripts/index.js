import Card from './Card.js';
import {initialCards} from "./cards.js";
import Validity from './validate.js';
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
const closePopupAdd = document.querySelector('.popup__close_for_add');
const closePopupEdit = document.querySelector('.popup__close_for_edit');
const titleImage = document.querySelector('[name=title]');
const linkImage = document.querySelector('[name=link]');
const popupZoomImage = document.querySelector('.popup_for_img');
const imgClose = document.querySelector('.popup__close_for_img');
const blockCards = document.querySelector('.elements');
const buttonAddImg = document.querySelector('.popup__button_for_add');
const allPopups = Array.from(document.querySelectorAll('.popup'));
const imgTemplate = document.querySelector('.img-template').content;
export const popupElement = document.querySelector('.popup_for_img');
export const popupImage = document.querySelector('.popup__img');
export const popupImageTitle = document.querySelector('.popup__info-img');
export const popupCloseButton = document.querySelector('.popup__close_for_img');
const popupValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
const formEditValidity = new Validity (popupValidation, formEdit);
const formAddValidity = new Validity (popupValidation, formAdd);

//функция, которая сбрасывает кнопку "сохранить"
function resetButtonSave(popup, popupValidation) {
    const buttonElement = popup.querySelector(popupValidation.submitButtonSelector);
    buttonElement.classList.add(popupValidation.inactiveButtonClass);
     buttonElement.disabled = true
};

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
  resetButtonSave(popupEditProfile, popupValidation);
};

//форма отправки имени и инфо
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closeModalWindow(popupEditProfile);
};

//функция поиска картинки и её дабавления
function createCard(title, link) {
  const card = imgTemplate.querySelector('.element').cloneNode(true);
  const cardImg = card.querySelector('.element__img');
  cardImg.src = link;
  card.querySelector('.element__name').textContent = title;
  cardImg.alt = title;
  bindLikeButtonClickHandler(card);
  bindDeleteButtonClickHandler(card);
  cardImg.addEventListener('click', handleImagePreview);
  return card;
};

//вызов функции добавления картинки через кнопку add
buttonAddImg.addEventListener('click', function (evt) {
  evt.preventDefault();
  const card = new Card(titleImage.value, linkImage.value, '.img-template');
  const cardElement = card.generateCard()
  blockCards.prepend(cardElement);
  titleImage.value = '';
  linkImage.value = '';
  closeModalWindow(popupAddCard);
  resetButtonSave(popupAddCard, popupValidation);
});

addBtnImage.addEventListener('click', () => { openModalWindow(popupAddCard); });
editBtnProfile.addEventListener('click', handleEditPopupOpen);
closePopupEdit.addEventListener('click', () => { closeModalWindow(popupEditProfile); });
closePopupAdd.addEventListener('click', () => { closeModalWindow(popupAddCard); });
imgClose.addEventListener('click', () => { closeModalWindow(popupZoomImage); });
formEdit.addEventListener('submit', handleEditFormSubmit);
document.addEventListener('keydown', closeEsc);
closeClickOnOverlay();
formEditValidity.enableValidation();
formAddValidity.enableValidation();
initialCards.forEach((item) => {
  const card = new Card (item.name, item.link, '.img-template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});