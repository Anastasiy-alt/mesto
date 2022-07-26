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

    setUserInfo(profileName, profileInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: profileName,
                about: profileInfo
            })
        })
            .then(res => this._check(res))
    }


}

