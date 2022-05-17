let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('#edit');
let popupAdd = document.querySelector('#add');
let formElement = document.querySelector('.popup__forma');
let nameInput = document.querySelector('.popup__item_input_name');
let infoInput = document.querySelector('.popup__item_input_info');
let naming = document.querySelector('.profile__name');
let info = document.querySelector('.profile__info');
let add = document.querySelector('.profile__add-button');
let closepopAdd = document.querySelector('#close-add');
let closepopEdit = document.querySelector('#close-edit');
let titleImage = document.querySelector('[name=title]');
let linkImage = document.querySelector('[name=link]');
const blockCards = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Собака-Чубака',
    link: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Собака-Чубака',
    link: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80'
  },
  {
    name: 'Собака-Чубака',
    link: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80'
  },
  {
    name: 'Собака-Чубака',
    link: 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  },
  {
    name: 'Собака-Чубака',
    link: 'https://images.unsplash.com/photo-1534432586043-ead5b99229fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80'
  },
  {
    name: 'Собака-Чубака',
    link: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80'
  }
];

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.querySelector('.song').cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('song__like_active', true);
  });
  songsContainer.append(songElement);

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

// function addImage (evt) { тут добавляются фоточки
//   evt.preventDefault();
  
//   popupAdd.classList.remove('popup_opened');
// }

formElement.addEventListener('submit', formSubmitHandler);
edit.addEventListener('click', editClick);
closepopEdit.addEventListener('click', closeClick);
closepopAdd.addEventListener('click', closeClick);
add.addEventListener('click', addClick);