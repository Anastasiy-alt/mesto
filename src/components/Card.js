export default class Card {
  constructor({ data, userId, handleCardClick, handleDeleteCard, handlePutLike, handleDeleteLike }, cardSelector) {
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._userId = userId;
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handlePutLike = handlePutLike
    this._handleDeleteLike = handleDeleteLike;
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
    this._imgName = this._element.querySelector('.element__name');
    this._likeButton = this._element.querySelector('.element__like');
    this._likeCount = this._element.querySelector('.element__like-counter');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeCount.textContent = this._likes.length;
    this._setEventListeners();
    this._img.alt = this._title;
    this._img.src = this._link;
    this._imgName.textContent = this._title;
    this._cutDeleteButton();
    this._checkLikeOnCard();
    return this._element;
  }

  _cutDeleteButton() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }

  handleClickDeleteButton() {
    this._element.remove();
  }

  handleClickLikeButton(likes) {
    this._likeButton.classList.toggle('element__like_click');
    this._likes = likes.likes;
    this._likeCount.textContent = this._likes.length;

  }

  _checkLikeOnCard() {
    if (this._likes.some((userId) => {
      return this._userId === userId._id;
    })) {
      this._likeButton.classList.add('element__like_click');
    }
  }

  _setEventListeners() {
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link)
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId)
    });
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like_click')) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handlePutLike(this._cardId);
      }
    });
  };
}