import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import { initialCards } from "../utils/cards.js";
import FormValidator from '../components/FormValidator.js';
import {
  editBtnProfile, popupEditProfile, popupAddCard, nameInput,
  infoInput, profileName, profileInfo, addBtnImage,
  blockCards, imagePopup, popupValidation,
  formValidators
} from "../utils/constants.js";

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