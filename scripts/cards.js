export const initialCards = [
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

export const editBtnProfile = document.querySelector('.profile__edit-button'); 
export const popupEditProfile = document.querySelector('.popup_for_edit');
export const popupAddCard = document.querySelector('.popup_for_add');
export const formEdit = document.querySelector('[name=form-info]');
export const formAdd = document.querySelector('[name=form-add]');
export const nameInput = document.querySelector('[name=name]');
export const infoInput = document.querySelector('[name=info]');
export const profileName = document.querySelector('.profile__name');
export const profileInfo = document.querySelector('.profile__info');
export const addBtnImage = document.querySelector('.profile__add-button');
export const closePopupAdd = document.querySelector('.popup__close_for_add');
export const closePopupEdit = document.querySelector('.popup__close_for_edit');
export const titleImage = document.querySelector('[name=title]');
export const linkImage = document.querySelector('[name=link]');
export const popupZoomImage = document.querySelector('.popup_for_img');
export const imgBig = document.querySelector('.popup__img');
export const imgInfo = document.querySelector('.popup__info-img');
export const imgClose = document.querySelector('.popup__close_for_img');
export const blockCards = document.querySelector('.elements');
export const buttonAddImg = document.querySelector('.popup__button_for_add');
export const allPopups = Array.from(document.querySelectorAll('.popup'));
export const imgTemplate = document.querySelector('.img-template').content;

export const popupValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}