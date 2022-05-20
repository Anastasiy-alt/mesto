const editBtnProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_for_edit');
const popupAdd = document.querySelector('.popup_for_add');
const formEdit = document.querySelector('[name=forma-info]');
const nameInput = document.querySelector('[name=name]');
const infoInput = document.querySelector('[name=info]');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const addBtnImage = document.querySelector('.profile__add-button');
const closePopupAdd = document.querySelector('.popup__close_for_add');
const closepopEdit = document.querySelector('.popup__close_for_edit');
const titleImage = document.querySelector('[name=title]');
const linkImage = document.querySelector('[name=link]');
const imagePopup = document.querySelector('.img-open');
const imgBig = document.querySelector('.img-open__img');
const imgInfo = document.querySelector('.img-open__info');
const imgClose = document.querySelector('.img-open__close');
const blockCards = document.querySelector('.elements');
const buttonAddImg = document.querySelector('.popup__button_for_add');

//если добавить карточку без картинки, 
//на её месте появляются лайки при открытии -- это фича, а не баг
function bindLikeButtonClickHandler (element) { //функция лайка
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_click');
    }); 
}

//функция удаления карточки
function bindDeleteButtonClickHandler (element) { 
  element.querySelector('.element__delete').addEventListener('click', function (evt) {
    element.remove();
    });
}

//открытие попапа
function openModalWindow (modalWindow) {
  modalWindow.classList.add('popup_opened');
} 

//закрытие попапа
function closeModalWindow (modalWindow) {
  modalWindow.classList.remove('popup_opened');
} 

//функция заполнения инпутов
function fillingInput (info, name) {
  info.value = profileInfo.textContent;
  name.value = profileName.textContent;
}

//открытие попапа редактирования профиля
function editClick (modalWindow, ) { 
  openModalWindow(modalWindow);
  fillingInput (infoInput, nameInput);
}

//форма отправки имени и инфо
function handlerSubmitEditForm (evt) { 
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  closeModalWindow (popupEdit);
}

//функция открытия картинки
function handlerOpenImgFunction (evt) { 
  openModalWindow (imagePopup);
  evt.target.classList.toggle('element__like_click'); //фича
  imgBig.src = evt.target.src;
  imgInfo.textContent = evt.target.alt;
  imgBig.alt = evt.target.alt;
};

//функция поиска картинки и её дабавления
function searchImg (title, link) {
  const imgTemplate = document.querySelector('.img-template').content;
  const card = imgTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__img').src = link;
  card.querySelector('.element__name').textContent = title;
  card.querySelector('.element__img').alt = title;
  bindLikeButtonClickHandler (card);
  bindDeleteButtonClickHandler (card);
  card.querySelector('.element__img').addEventListener('click', handlerOpenImgFunction);
  blockCards.prepend(card);
}

//авто загрузка карточек
initialCards.forEach(function (x) { 
  imgName = x.name;
  imgLink = x.link;
  searchImg (imgName, imgLink);
});

//вызов функции добавления картинки через кнопку add
buttonAddImg.addEventListener('click', function (evt) { 
  evt.preventDefault();
  searchImg (titleImage.value, linkImage.value);
  titleImage.value = '';
  linkImage.value = '';
  closeModalWindow (popupAdd);
});

addBtnImage.addEventListener('click', () => { openModalWindow (popupAdd); });
editBtnProfile.addEventListener('click', () => { editClick (popupEdit); });
closepopEdit.addEventListener('click', () => { closeModalWindow (popupEdit); });
closePopupAdd.addEventListener('click', () => { closeModalWindow (popupAdd); });
imgClose.addEventListener('click', () => { closeModalWindow (imagePopup); });
formEdit.addEventListener('submit', handlerSubmitEditForm);