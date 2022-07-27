import Api from '../components/Api.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import FormValidator from '../components/FormValidator.js';
import {
  editBtnProfile, popupEditProfile, popupAddCard, nameInput,
  infoInput, profileName, profileInfo, addBtnImage,
  blockCards, imagePopup, popupValidation,
  formValidators, profileAvatar
} from "../utils/constants.js";

const popupDeleteCard = document.querySelector('.popup_for_delete');
const popupEditAvatar = document.querySelector('.popup_for_avatar');
const editAvatarBtn = document.querySelector('.profile__cover-hover');
const avatarInput = document.querySelector('.popup__item_input_link-avatar');

editAvatarBtn.addEventListener('click', () => {
  formValidators['form-avatar'].resetValidation();
  const userData = userInfo.getUserInfo()
  avatarInput.value = userData.avatar;
  handleEditAvatar.open();
})

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '4ab555e1-39a0-48e6-8593-6e8a4a84e28f',
    'Content-Type': 'application/json'
  }
});

const сardsList = new Section({
  renderer: (item) => {
    сardsList.addItem(createCard(item));
  }
}, blockCards);

const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileInfo,
  userAvatar: profileAvatar
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    сardsList.renderItems(initialCards);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });

const submitEdit = (dataEditForm) => { //edit
  api.setUserInfo(dataEditForm)
  .then((dataEditForm) => {
      userInfo.setUserInfo(dataEditForm);
      handleEditForm.close();
    }
  )
}

const submitAvatar = (dataAvatarForm) => { //avatar
  api.setUserAvatar(dataAvatarForm)
  .then((dataAvatarForm) => {
    console.log(dataAvatarForm)
      userInfo.setUserInfo(dataAvatarForm);
      handleEditAvatar.close();
    }
  )
}

const handleEditForm = new PopupWithForm(popupEditProfile, submitEdit); //editform
handleEditForm.setEventListeners();

const handleEditAvatar = new PopupWithForm(popupEditAvatar, submitAvatar); //avatar
handleEditAvatar.setEventListeners();

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



// сardsList.renderItems(initialCards);

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