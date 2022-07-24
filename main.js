(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=r.title,this._link=r.link,this._cardSelector=n,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._img=this._element.querySelector(".element__img"),this._imgName=this._element.querySelector(".element__name"),this._likeButton=this._element.querySelector(".element__like"),this._setEventListeners(),this._img.alt=this._title,this._img.src=this._link,this._imgName.textContent=this._title,this._element}},{key:"_handleClickLikeButton",value:function(){this._likeButton.classList.toggle("element__like_click")}},{key:"_handleClickDeleteButton",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton=this._element.querySelector(".element__delete"),this._img.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)})),this._deleteButton.addEventListener("click",(function(){e._handleClickDeleteButton()})),this._likeButton.addEventListener("click",(function(){e._handleClickLikeButton()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._escClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=a(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function a(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,n,r,o,a=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=a.call(this,e))._submit=t,n._popupForm=n._popup.querySelector(".popup__form"),n._popupInput=n._popupForm.querySelectorAll(".popup__item"),n}return t=f,(n=[{key:"_getInputValues",value:function(){var e={};return this._popupInput.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;u(s(f.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){u(s(f.prototype),"close",this).call(this),this._popupForm.reset()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imgLink=t._popup.querySelector(".popup__img"),t._imgName=t._popup.querySelector(".popup__info-img"),t}return t=u,(n=[{key:"open",value:function(e,t){this._imgLink.src=t,this._imgLink.alt=e,this._imgName.textContent=e,d(g(u.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.userName,r=t.userInfo;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userInfo=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._userName.textContent,e.info=this._userInfo.textContent,e}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.info}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"_showError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._form.inputErrorClass),n.textContent=t,n.classList.add(r._form.errorClass)})),O(this,"_hideError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._form.inputErrorClass),t.classList.remove(r._form.errorClass),t.textContent=" "})),O(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),this._form=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".popup__item")),this._buttonElement=this._formElement.querySelector(this._form.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"makeButtonDisabled",value:function(){this._buttonElement.classList.add(this._form.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this.makeButtonDisabled():(this._buttonElement.classList.remove(this._form.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=document.querySelector(".profile__edit-button"),j=document.querySelector(".popup_for_edit"),P=document.querySelector(".popup_for_add"),q=document.querySelector("[name=name]"),I=document.querySelector("[name=info]"),B=document.querySelector(".profile__name"),R=document.querySelector(".profile__info"),x=document.querySelector(".profile__add-button"),T=document.querySelector(".elements"),D=document.querySelector(".popup_for_img"),N=document.querySelector(".profile__avatar"),V={};fetch("https://nomoreparties.co/v1/cohort-46/users/me",{headers:{authorization:"4ab555e1-39a0-48e6-8593-6e8a4a84e28f"}}).then((function(e){return e.json()})).then((function(e){B.textContent=e.name,R.textContent=e.about,N.src=e.avatar}));var A=[];fetch("https://mesto.nomoreparties.co/v1/cohort-46/cards",{headers:{authorization:"4ab555e1-39a0-48e6-8593-6e8a4a84e28f"}}).then((function(e){return e.json()})).then((function(e){return e.forEach((function(e){var t={};t.title=e.name,t.link=e.link,A.push(t)})),cards})),console.log(A,"222");var F=new w({userName:B,userInfo:R}),U=new f(j,(function(e){F.setUserInfo(e),U.close()}));U.setEventListeners(),L.addEventListener("click",(function(){V["form-info"].resetValidation();var e=F.getUserInfo();I.value=e.info,q.value=e.name,U.open()}));var z=new k(D);z.setEventListeners();var M=function(e){return new t({data:e,handleCardClick:function(e,t){z.open(e,t)}},".img-template").generateCard()},G=new f(P,(function(e){J.addItem(M(e)),G.close()}));G.setEventListeners(),x.addEventListener("click",(function(){V["form-add"].resetValidation(),G.open()}));var H,J=new h({items:A,renderer:function(e){J.addItem(M(e))}},T);J.renderItems(),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_type_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(H.formSelector)).forEach((function(e){var t=new C(H,e),n=e.getAttribute("name");V[n]=t,t.enableValidation()}))})();