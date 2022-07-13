export default class UserInfo {
    constructor({ userName, userInfo }) {
        this._userName = userName;
        this._userInfo = userInfo;
    }

    getUserInfo() {
        const userData = {};
        userData['name'] = this._userName.textContent;
        userData['info'] = this._userInfo.textContent;
        return userData;
    }

    setUserInfo(userData) {
        this._userName.textContent = userData.name;
        this._userInfo.textContent = userData.info;
    }
}