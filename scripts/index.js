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
const imgBig = document.querySelector('.popup__img');
const imgInfo = document.querySelector('.popup__info-img');
const imgClose = document.querySelector('.popup__close_for_img');
const blockCards = document.querySelector('.elements');
const buttonAddImg = document.querySelector('.popup__button_for_add');
const allPopups = Array.from(document.querySelectorAll('.popup'));
const imgTemplate = document.querySelector('.img-template').content;

//если добавить карточку без картинки, 
//на её месте появляются лайки при открытии -- это фича, а не баг
// function bindLikeButtonClickHandler(element) { //функция привязки обработчика события клика по лайку
//   element.querySelector('.element__like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('element__like_click');
//   });
// };

//функция привязки обработчика события клика по кнопке удаления
// function bindDeleteButtonClickHandler(element) {
//   element.querySelector('.element__delete').addEventListener('click', function (evt) {
//     element.remove();
//   });
// };

//закрытие попапа через Escape
function closeEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    evt.target.classList.remove('popup_opened');
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
        evt.target.classList.remove('popup_opened');
      };
    });
  });
};

//открытие попапа редактирования профиля
function handleEditPopupOpen() {
  openModalWindow(popupEditProfile);
  infoInput.value = profileInfo.textContent;
  nameInput.value = profileName.textContent;
  // resetButtonSave(popupEditProfile, popupValidation);
};

//форма отправки имени и инфо
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closeModalWindow(popupEditProfile);
};

//функция открытия картинки
// function handleImagePreview(evt) {
//   openModalWindow(popupZoomImage);
//   evt.target.classList.toggle('element__like_click'); //фича
//   imgBig.src = evt.target.src;
//   imgInfo.textContent = evt.target.alt;
//   imgBig.alt = evt.target.alt;
// };

//функция поиска картинки и её дабавления
// function createCard(title, link) {
//   const card = imgTemplate.querySelector('.element').cloneNode(true);
//   const cardImg = card.querySelector('.element__img');
//   cardImg.src = link;
//   card.querySelector('.element__name').textContent = title;
//   cardImg.alt = title;
//   bindLikeButtonClickHandler(card);
//   bindDeleteButtonClickHandler(card);
//   cardImg.addEventListener('click', handleImagePreview);
//   return card;
// };

//авто загрузка карточек
// initialCards.forEach(function (item) {
//   const card = createCard(item.name, item.link);
//   blockCards.prepend(card);
// });

//вызов функции добавления картинки через кнопку add
buttonAddImg.addEventListener('click', function (evt) {
  evt.preventDefault();
  const card = createCard(titleImage.value, linkImage.value);
  blockCards.prepend(card);
  titleImage.value = '';
  linkImage.value = '';
  closeModalWindow(popupAddCard);
  // resetButtonSave(popupAddCard, popupValidation);
});

addBtnImage.addEventListener('click', () => { openModalWindow(popupAddCard); });
editBtnProfile.addEventListener('click', handleEditPopupOpen);
closePopupEdit.addEventListener('click', () => { closeModalWindow(popupEditProfile); });
closePopupAdd.addEventListener('click', () => { closeModalWindow(popupAddCard); });
// imgClose.addEventListener('click', () => { closeModalWindow(popupZoomImage); });
formEdit.addEventListener('submit', handleEditFormSubmit);
closeClickOnOverlay();


const popupElement = document.querySelector('.popup_for_img');
const popupImage = document.querySelector('.popup__img');
const popupImageTitle = document.querySelector('.popup__info-img');
const popupCloseButton = document.querySelector('.popup__close_for_img');
const elementCard = document.querySelector('.element');

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._img = this._element.querySelector('.element__img')
    this._setEventListeners();
    this._element.querySelector('.element__img').alt = this._link;
    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__name').textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImage.alt = this._link;
    popupImageTitle.textContent = this._title;
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupImage.alt = '';
    popupImageTitle.textContent = '';
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEsc);
  }

  _handleClosePopupClickOnOverlay() {
      if (popupElement.classList.contains('popup_opened')) {
          this._handleClosePopup();
        };
  }

  _handleClickLikeButton() {
    this._element.querySelector('.element__like').classList.toggle('element__like_click');
  }

  _handleClickDeleteButton() {
      this._element.remove();
  }

  _setEventListeners() {
    this._img.addEventListener('click', () => {
      this._handleOpenPopup()
    });
    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup()
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleClickDeleteButton();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleClickLikeButton();
    });
  };
  
}

initialCards.forEach((item) => {
  const card = new Card(item, '.img-template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});
