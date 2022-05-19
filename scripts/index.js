let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_for_edit');
let popupAdd = document.querySelector('.popup_for_add');
let formEdit = document.querySelector('[name=forma-info]');
let formAdd = document.querySelector('[name=forma-add]');
let nameInput = document.querySelector('[name=name]');
let infoInput = document.querySelector('[name=info]');
let naming = document.querySelector('.profile__name');
let info = document.querySelector('.profile__info');
let add = document.querySelector('.profile__add-button');
let closepopAdd = document.querySelector('.popup__close_for_add');
let closepopEdit = document.querySelector('.popup__close_for_edit');
let titleImage = document.querySelector('[name=title]');
let linkImage = document.querySelector('[name=link]');
const blockCards = document.querySelector('.elements');
const buttonAddImg = document.querySelector('.popup__button_for_add');
const imgTemplate = document.querySelector('.img-template').content;
const element = imgTemplate.querySelector('.element').cloneNode(true);
let imgOpen = document.querySelector('.img-open');
let imgBig = document.querySelector('.img-open__img');
let imgInfo = document.querySelector('.img-open__info');
let imgClose = document.querySelector('.img-open__close');

const initialCards = [
  {
    name: 'Toshi в толстовке',
    link: 'https://images.unsplash.com/photo-1534432586043-ead5b99229fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80'
  },
  {
    name: 'Toshi в дождивике',
    link: 'https://images.unsplash.com/photo-1530041686259-53d26f863313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2619&q=80'
  },
  {
    name: 'Toshi француз',
    link: 'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
  },
  {
    name: 'Toshi в костюме Тоторо',
    link: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80'
  },
  {
    name: 'Toshi в джинсовке',
    link: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80'
  },
  {
    name: 'Toshi на стиле',
    link: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

function like (element) { //функция лайка
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_click');
    });
}

function addClick () {
  popupAdd.classList.add('popup_opened');
}

function editClick () {
    popupEdit.classList.add('popup_opened');
    infoInput.value = info.textContent;
    nameInput.value = naming.textContent;
}

function closeClick () {
  popupEdit.classList.remove('popup_opened');
  popupAdd.classList.remove('popup_opened');
  imgOpen.classList.remove('popup_opened');
}

function formSubmitHandler (evt) { //форма отправки имени и инфо
    evt.preventDefault();
    naming.textContent = nameInput.value;
    info.textContent = infoInput.value;
    popupEdit.classList.remove('popup_opened');
}

function openImgFunction (evt) { //функция открытия картинки
  imgOpen.classList.add('popup_opened');
  evt.target.classList.toggle('element__like_click');
  imgBig.src = evt.target.src;
  imgInfo.textContent = evt.target.alt;
};

function addImg(title, link) { //функция добавления картинки
  const imgTemplate = document.querySelector('.img-template').content;
  const element = imgTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__img').src = link;
  element.querySelector('.element__name').textContent = title;
  element.querySelector('.element__img').alt = title;
  like (element);
  element.querySelector('.element__img').addEventListener('click', openImgFunction);
  blockCards.prepend(element);
};

formEdit.addEventListener('submit', formSubmitHandler);
edit.addEventListener('click', editClick);
closepopEdit.addEventListener('click', closeClick);
closepopAdd.addEventListener('click', closeClick);
add.addEventListener('click', addClick);
imgClose.addEventListener('click', closeClick);

initialCards.forEach(function (x) { //авто загрузка карточек
  const imgTemplate = document.querySelector('.img-template').content;
  const element = imgTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__name').textContent = x.name;
  element.querySelector('.element__img').src = x.link;
  element.querySelector('.element__img').alt = x.name;
  like (element);
  element.querySelector('.element__img').addEventListener('click', openImgFunction);
  blockCards.append(element);
});

buttonAddImg.addEventListener('click', function (evt) { //вызов функции добавления картинки через кнопку add
  evt.preventDefault();
  addImg(titleImage.value, linkImage.value);
  titleImage.value = '';
  linkImage.value = '';
  popupAdd.classList.remove('popup_opened');
});




// buttonAddImg.addEventListener('click', function (evt) { //добавление картинки
//   evt.preventDefault();
//   addImg(titleImage.value, linkImage.value);
//   titleImage.value = '';
//   linkImage.value = '';
//   initialCards.unshift('evt');
//   console.log(evt);
//   console.log(initialCards.length);
//   popupAdd.classList.remove('popup_opened');
// });