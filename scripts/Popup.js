export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._escClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) { //bind
        if (evt.key === 'Escape') {
            this.close()
        };
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', () => {
            this._escClose();
        });
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', () => {
            this._escClose();
        });
    }

    setEventListeners() {
        const closeBtn = this._popup.querySelector('.popup__close');
        closeBtn.addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close()
            }
        })
    }
}