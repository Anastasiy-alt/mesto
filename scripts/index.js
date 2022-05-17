let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('#edit');
let popupAdd = document.querySelector('#add');
let formEdit = document.querySelector('[name=forma-info]');
let formAdd = document.querySelector('[name=forma-add]');
let nameInput = document.querySelector('[name=name]');
let infoInput = document.querySelector('[name=info]');
let naming = document.querySelector('.profile__name');
let info = document.querySelector('.profile__info');
let add = document.querySelector('.profile__add-button');
let closepopAdd = document.querySelector('#close-add');
let closepopEdit = document.querySelector('#close-edit');
let titleImage = document.querySelector('[name=title]');
let linkImage = document.querySelector('[name=link]');
const blockCards = document.querySelector('.elements');
const buttonAddImg = document.querySelector('#button-add-img');

const initialCards = [
  {
    name: 'Toshi в толстовке',
    link: 'https://images.unsplash.com/photo-1534432586043-ead5b99229fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80'
  },
  {
    name: 'Toshi в джинсовке',
    link: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80'
  }, 
  {
    name: 'Toshi француз',
    link: 'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
  },
  {
    name: 'Toshi в дождивике',
    link: 'https://images.unsplash.com/photo-1530041686259-53d26f863313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2619&q=80'
  },
  {
    name: 'Toshi в костюме Тоторо',
    link: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80'
  },
  {
    name: 'Toshi на стиле',
    link: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];



function addImg(title, link) {
  const imgTemplate = document.querySelector('#img-template').content;
  const element = imgTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__img').src = link;
  element.querySelector('.element__name').textContent = title;
  blockCards.prepend(element);
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
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    naming.textContent = nameInput.value;
    info.textContent = infoInput.value;
    popupEdit.classList.remove('popup_opened');
}

formEdit.addEventListener('submit', formSubmitHandler);
edit.addEventListener('click', editClick);
closepopEdit.addEventListener('click', closeClick);
closepopAdd.addEventListener('click', closeClick);
add.addEventListener('click', addClick);

buttonAddImg.addEventListener('click', function (evt) {
  evt.preventDefault();
  addImg(titleImage.value, linkImage.value);
  titleImage.value = '';
  linkImage.value = '';
  popupAdd.classList.remove('popup_opened');
});

initialCards.forEach(function (x) {
  const imgTemplate = document.querySelector('#img-template').content;
  const element = imgTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__name').textContent = x.name;
  element.querySelector('.element__img').src = x.link;
  
  blockCards.append(element);
});