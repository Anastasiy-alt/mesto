const popupElement = document.querySelector('.popup_for_img');
const popupImage = document.querySelector('.popup__img');
const popupImageTitle = document.querySelector('.popup__info-img');
const popupCloseButton = document.querySelector('.popup__close_for_img');
const elementCard = document.querySelector('.element');

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
    this._img = this._element.querySelector('.element__img')
    this._setEventListeners();
    this._element.querySelector('.element__img').alt = this._link;
    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__name').textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImage.alt = this._link;
    popupImageTitle.textContent = this._title;
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupImage.alt = '';
    popupImageTitle.textContent = '';
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEsc);
  }

  _handleClosePopupClickOnOverlay() {
      if (popupElement.classList.contains('popup_opened')) {
          this._handleClosePopup();
        };
  }

  _handleClickLikeButton() {
    this._element.querySelector('.element__like').classList.toggle('element__like_click');
  }

  _handleClickDeleteButton() {
      this._element.remove();
  }

  _setEventListeners() {
    this._img.addEventListener('click', () => {
      this._handleOpenPopup()
    });
    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup()
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleClickDeleteButton();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleClickLikeButton();
    });
  };
  
}

initialCards.forEach((item) => {
  const card = new Card(item, '.img-template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});
