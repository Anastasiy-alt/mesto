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
        // userData['_id'] = this._userid;
        return userData;
    }

    getUserId() {
        return this._userid;
    }

    setUserInfo(userData) {
        this._userName.textContent = userData.name;
        this._userInfo.textContent = userData.about;
        this._userAvatar.src = userData.avatar;
        this._userid = userData._id;
    }

}