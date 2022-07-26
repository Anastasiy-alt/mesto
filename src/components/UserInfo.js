export default class UserInfo {
    constructor({ userName, userInfo, userAvatar }) {
        this._userName = userName;
        this._userInfo = userInfo;
        this._userAvatar = userAvatar;
    }

    getUserInfo() {
        const userData = {};
        userData['name'] = this._userName.textContent;
        userData['info'] = this._userInfo.textContent;
        userData['avatar'] = this._userAvatar.src;
        return userData;

    }

    setUserInfo(userData) {
        // fetch('https://mesto.nomoreparties.co/v1/cohort-46/users/me', {
        //     method: 'PATCH',
        //     headers: {
        //         authorization: '4ab555e1-39a0-48e6-8593-6e8a4a84e28f',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: userData.name,
        //         about: userData.info
        //     })
        // });
        this._userName.textContent = userData.name;
        this._userInfo.textContent = userData.info;
        this._userAvatar.src = userData.avatar;
    }
}