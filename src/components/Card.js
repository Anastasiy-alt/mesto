export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._title = data.title;
    this._link = data.link;
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
    this._imgName = this._element.querySelector('.element__name');
    this._likeButton = this._element.querySelector('.element__like');
    this._setEventListeners();
    this._img.alt = this._title;
    this._img.src = this._link;
    this._imgName.textContent = this._title;
    fetch('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
            method: 'POST',
            headers: {
                authorization: '4ab555e1-39a0-48e6-8593-6e8a4a84e28f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this._title,
                link: this._link
            })
        });
    return this._element;
  }

  _handleClickLikeButton() {
    this._likeButton.classList.toggle('element__like_click');
  }

  _handleClickDeleteButton() {
    this._element.remove();
  }

  _setEventListeners() {
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
