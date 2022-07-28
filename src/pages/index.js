import Api from '../components/Api.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import './index.css';
import FormValidator from '../components/FormValidator.js';
import {
  editBtnProfile, popupEditProfile, popupAddCard, nameInput,
  infoInput, profileName, profileInfo, addBtnImage,
  blockCards, imagePopup, popupValidation,
  formValidators, profileAvatar, popupDeleteCard,
  popupEditAvatar, editAvatarBtn, avatarInput
} from "../utils/constants.js";

//Api//

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '4ab555e1-39a0-48e6-8593-6e8a4a84e28f',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    сardsList.renderItems(initialCards.reverse());
    // arrayCard.reverse();

  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });

//User info//

const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileInfo,
  userAvatar: profileAvatar
});

//User profile//

const submitEdit = (dataEditForm) => { //edit
  handleEditForm.isLoading(true)
  api.setUserInfo(dataEditForm)
    .then((dataEditForm) => {
      userInfo.setUserInfo(dataEditForm);
      handleEditForm.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      handleEditForm.isLoading(false);
    });
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

//User avatar//

const submitAvatar = (dataAvatarForm) => { //avatar
  handleEditAvatar.isLoading(true)
  api.setUserAvatar(dataAvatarForm)
    .then((dataAvatarForm) => {
      userInfo.setUserInfo(dataAvatarForm);
      handleEditAvatar.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      handleEditAvatar.isLoading(false);
    });
}

const handleEditAvatar = new PopupWithForm(popupEditAvatar, submitAvatar); //avatar
handleEditAvatar.setEventListeners();

editAvatarBtn.addEventListener('click', () => {
  formValidators['form-avatar'].resetValidation();
  const userData = userInfo.getUserInfo()
  avatarInput.value = userData.avatar;
  handleEditAvatar.open();
})

//Cards//

const сardsList = new Section({
  renderer: (item) => {
    сardsList.addItem(createCard(item));
  }
}, blockCards);

const zoomImg = new PopupWithImage(imagePopup);
zoomImg.setEventListeners();

const handleDeleteCard = new PopupDeleteCard(popupDeleteCard);
handleDeleteCard.setEventListeners();

const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      userId: userInfo.getUserId(),
      handleCardClick: (name, link) => {
        zoomImg.open(name, link);
      },
      handleDeleteCard: (cardId) => {
        handleDeleteCard.open();
        handleDeleteCard.submitDelete(() => {
          api.deleteCard(cardId)
            .then(() => {
              handleDeleteCard.close();
              card.handleClickDeleteButton();
            })
            .catch((err) => {
              console.log(err); // выведем ошибку в консоль
            });
        })
      },
      handlePutLike: (cardId) => {
        api.putLike(cardId)
          .then((likes) => {
            card.handleClickLikeButton(likes);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleDeleteLike: (cardId) => {
        api.deleteLike(cardId)
          .then((likes) => {
            card.handleClickLikeButton(likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, '.img-template');
  const cardElement = card.generateCard();
  return cardElement;
};

//Add card//

const submitAdd = (dataAddForm) => {
  handleAddCardPopup.isLoading(true)
  api.addInitialCards(dataAddForm)
    .then((dataAddForm) => {
      сardsList.addItem(createCard(dataAddForm));
      handleAddCardPopup.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      handleAddCardPopup.isLoading(false);
    });
};

const handleAddCardPopup = new PopupWithForm(popupAddCard, submitAdd);
handleAddCardPopup.setEventListeners();

addBtnImage.addEventListener('click', () => {
  formValidators['form-add'].resetValidation();
  handleAddCardPopup.open();
})

//Validation//

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