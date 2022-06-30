import {popupImage, popupImageTitle, popupElement, popupCloseButton} from "./index.js";
import {closeEsc} from "./index.js";

export default class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._title = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._img = this._element.querySelector('.element__img');
    this._setEventListeners();
    this._img.alt = this._title;
    this._img.src = this._link;
    this._element.querySelector('.element__name').textContent = this._title;
    
    return this._element;
  }

  _handleClickLikeButton() {
    this._likeButton.classList.toggle('element__like_click');
  }

  _handleClickDeleteButton() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link)
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleClickDeleteButton();
    });
    this._likeButton.addEventListener('click', () => {
      this._handleClickLikeButton();
    });
  };
}

