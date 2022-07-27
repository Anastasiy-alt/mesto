import Api from '../components/Api.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import { initial } from "../utils/cards.js";
import FormValidator from '../components/FormValidator.js';
import {
  editBtnProfile, popupEditProfile, popupAddCard, nameInput,
  infoInput, profileName, profileInfo, addBtnImage,
  blockCards, imagePopup, popupValidation,
  formValidators, profileAvatar
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '4ab555e1-39a0-48e6-8593-6e8a4a84e28f',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileInfo,
  userAvatar: profileAvatar
});

const submitEdit = (dataEditForm) => {
  api.setUserInfo(dataEditForm)
  .then((dataEditForm) => {
      userInfo.setUserInfo(dataEditForm);
      handleEditForm.close();
    }
  )
}

const handleEditForm = new PopupWithForm(popupEditProfile, submitEdit);
handleEditForm.setEventListeners();

editBtnProfile.addEventListener('click', () => {
  formValidators['form-info'].resetValidation();
  const userData = userInfo.getUserInfo()
  infoInput.value = userData.info;
  nameInput.value = userData.name;
  handleEditForm.open();
});

const zoomImg = new PopupWithImage(imagePopup);
zoomImg.setEventListeners();

const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        zoomImg.open(name, link);
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
  renderer: (item) => {
    сardsList.addItem(createCard(item));
  }
}, blockCards);

сardsList.renderItems(initial);

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