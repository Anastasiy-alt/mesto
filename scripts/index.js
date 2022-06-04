const editBtnProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_for_edit');
const popupAdd = document.querySelector('.popup_for_add');
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
const imagePopup = document.querySelector('.popup_for_img');
const imgBig = document.querySelector('.popup__img');
const imgInfo = document.querySelector('.popup__info-img');
const imgClose = document.querySelector('.popup__close_for_img');
const blockCards = document.querySelector('.elements');
const buttonAddImg = document.querySelector('.popup__button_for_add');
const allPopup = Array.from(document.querySelectorAll('.popup'));
const overlay = document.querySelector('.popup_opened');

//если добавить карточку без картинки, 
//на её месте появляются лайки при открытии -- это фича, а не баг
function bindLikeButtonClickHandler(element) { //функция привязки обработчика события клика по лайку
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_click');
  });
};

//функция привязки обработчика события клика по кнопке удаления
function bindDeleteButtonClickHandler(element) {
  element.querySelector('.element__delete').addEventListener('click', function (evt) {
    element.remove();
  });
};

//открытие попапа
function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
};

//закрытие попапа
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
};

//закрытие попапа через Escape
function closeEsc(evt) {
  if (evt.key === 'Escape') {
    allPopup.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        closeModalWindow(popup);
      };
    });
  };
};

//закрытие попапа через клик на overlay
function closeClickOnOverlay() {
  allPopup.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closeModalWindow(evt.target);
      };
    });
  });
};

//открытие попапа редактирования профиля
function handleEditPopupOpen() {
  openModalWindow(popupEdit);
  infoInput.value = profileInfo.textContent;
  nameInput.value = profileName.textContent;
};

//форма отправки имени и инфо
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closeModalWindow(popupEdit);
};

//функция открытия картинки
function handleImagePreview(evt) {
  openModalWindow(imagePopup);
  evt.target.classList.toggle('element__like_click'); //фича
  imgBig.src = evt.target.src;
  imgInfo.textContent = evt.target.alt;
  imgBig.alt = evt.target.alt;
};

//функция поиска картинки и её дабавления
function createCard(title, link) {
  const imgTemplate = document.querySelector('.img-template').content;
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

//авто загрузка карточек
initialCards.forEach(function (item) {
  const card = createCard(item.name, item.link);
  blockCards.prepend(card);
});

//вызов функции добавления картинки через кнопку add
buttonAddImg.addEventListener('click', function (evt) {
  evt.preventDefault();
  const card = createCard(titleImage.value, linkImage.value);
  blockCards.prepend(card);
  titleImage.value = '';
  linkImage.value = '';
  closeModalWindow(popupAdd);
});

addBtnImage.addEventListener('click', () => { openModalWindow(popupAdd); });
editBtnProfile.addEventListener('click', handleEditPopupOpen);
closePopupEdit.addEventListener('click', () => { closeModalWindow(popupEdit); });
closePopupAdd.addEventListener('click', () => { closeModalWindow(popupAdd); });
imgClose.addEventListener('click', () => { closeModalWindow(imagePopup); });
formEdit.addEventListener('submit', handleEditFormSubmit);
document.addEventListener('keydown', closeEsc);
closeClickOnOverlay();