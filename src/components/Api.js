export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _check(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'GET'
        })
            .then(res => this._check(res))
            .then((result) => {
                result.forEach(function (item) {
                    const cardObj = {};
                    cardObj.title = item.name;
                    cardObj.link = item.link;
                    initialCards.push(cardObj);
                })
                return initialCards;
            })
    }

    setInitialCards() {

    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => this._check(res))
    }

    setUserInfo(userData) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: userData.name,
                about: userData.info
            })
        })
            .then(res => res.json())
            .then(res => this._check(res))
            
    }

    addCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(res => res.json())
            .then(res => this._check(res));
    }

}

