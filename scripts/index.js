let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__forma');
let nameInput = document.querySelector('.popup__item_input_name');
let infoInput = document.querySelector('.popup__item_input_info');
let naming = document.querySelector('.profile__name');
let info = document.querySelector('.profile__info');
let closepop = document.querySelector('.popup__close');

function editClick () {
    popup.classList.add('popup_opened');
    infoInput.value = info.textContent;
    nameInput.value = naming.textContent;
    
  }

function closeClick () {
    popup.classList.remove('popup_opened');
  }

function formSubmitHandler (evt) {
    evt.preventDefault();
    naming.textContent = nameInput.value;
    info.textContent = infoInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
edit.addEventListener('click', editClick);
closepop.addEventListener('click', closeClick);