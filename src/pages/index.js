import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

import { initialCards } from "../utils/cards.js";
import FormValidator from '../components/FormValidator.js';
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
const formValidators = {};


const userInfoPopup = new UserInfo({
  userName: profileName,
  userInfo: profileInfo
});

const submitEdit = (dataEditForm) => {
  userInfoPopup.setUserInfo(dataEditForm);
  handleEditForm.close();
}

const handleEditForm = new PopupWithForm(popupEditProfile, submitEdit);
handleEditForm.setEventListeners();

editBtnProfile.addEventListener('click', () => {
  formValidators['form-info'].resetValidation();
  infoInput.value = profileInfo.textContent;
  nameInput.value = profileName.textContent;
  handleEditForm.open();
});

const zoomImg = new PopupWithImage(imagePopup);
zoomImg.setEventListeners();

const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (title, Link) => {
        zoomImg.open(title, Link);
      }
    }, '.img-template');
  const cardElement = card.generateCard();
  return cardElement;
};

const submitAdd = (dataAddForm) => {
  сardsList.addItem(createCard(dataAddForm));
  handleAddCardPopup.close();
};

const handleAddCardPopup = new PopupWithForm(popupAddCard, submitAdd);

handleAddCardPopup.setEventListeners();

addBtnImage.addEventListener('click', () => {
  formValidators['form-add'].resetValidation();
  handleAddCardPopup.open();
})

const сardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    сardsList.addItem(createCard(item));
  }
}, blockCards);

сardsList.renderItems();

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

enableValidation(popupValidation);