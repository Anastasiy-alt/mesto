(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n){var o=e.data,r=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=o.title,this._link=o.link,this._cardSelector=n,this._handleCardClick=r}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._img=this._element.querySelector(".element__img"),this._imgName=this._element.querySelector(".element__name"),this._likeButton=this._element.querySelector(".element__like"),this._setEventListeners(),this._img.alt=this._title,this._img.src=this._link,this._imgName.textContent=this._title,this._element}},{key:"_handleClickLikeButton",value:function(){this._likeButton.classList.toggle("element__like_click")}},{key:"_handleClickDeleteButton",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton=this._element.querySelector(".element__delete"),this._img.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)})),this._deleteButton.addEventListener("click",(function(){e._handleClickDeleteButton()})),this._likeButton.addEventListener("click",(function(){e._handleClickLikeButton()}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._escClose=this._handleEscClose.bind(this)}var t,o;return t=e,(o=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=a(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},u.apply(this,arguments)}function a(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(f,e);var t,n,o,r,a=(o=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(o);if(r){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=a.call(this,e))._submit=t,n._popupForm=n._popup.querySelector(".popup__form"),n._popupInput=n._popupForm.querySelectorAll(".popup__item"),n}return t=f,(n=[{key:"_getInputValues",value:function(){var e={};return this._popupInput.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;u(s(f.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){u(s(f.prototype),"close",this).call(this),this._popupForm.reset()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(o);function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=m(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imgLink=t._popup.querySelector(".popup__img"),t._imgName=t._popup.querySelector(".popup__info-img"),t}return t=u,(n=[{key:"open",value:function(e,t){this._imgLink.src=t,this._imgLink.alt=e,this._imgName.textContent=e,_(w(u.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o);function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var E=function(){function e(t){var n=t.userName,o=t.userInfo;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userInfo=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._userName.textContent,e.info=this._userInfo.textContent,e}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.info}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_showError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._form.inputErrorClass),n.textContent=t,n.classList.add(o._form.errorClass)})),S(this,"_hideError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._form.inputErrorClass),t.classList.remove(o._form.errorClass),t.textContent=" "})),S(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),this._form=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".popup__item")),this._buttonElement=this._formElement.querySelector(this._form.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"makeButtonDisabled",value:function(){this._buttonElement.classList.add(this._form.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this.makeButtonDisabled():(this._buttonElement.classList.remove(this._form.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".profile__edit-button"),C=document.querySelector(".popup_for_edit"),L=document.querySelector(".popup_for_add"),B=document.querySelector("[name=name]"),P=document.querySelector("[name=info]"),q=document.querySelector(".profile__name"),I=document.querySelector(".profile__info"),D=document.querySelector(".profile__add-button"),M=document.querySelector(".elements"),T=document.querySelector(".popup_for_img"),H={},R=new E({userName:q,userInfo:I}),V=new f(C,(function(e){R.setUserInfo(e),V.close()}));V.setEventListeners(),j.addEventListener("click",(function(){H["form-info"].resetValidation();var e=R.getUserInfo();P.value=e.info,B.value=e.name,V.open()}));var A=new g(T);A.setEventListeners();var G=function(e){return new t({data:e,handleCardClick:function(e,t){A.open(e,t)}},".img-template").generateCard()},N=new f(L,(function(e){Y.addItem(G(e)),N.close()}));N.setEventListeners(),D.addEventListener("click",(function(){H["form-add"].resetValidation(),N.open()}));var W,Y=new h({items:[{title:"Toshi в толстовке",link:"https://images.unsplash.com/photo-1534432586043-ead5b99229fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80"},{title:"Toshi в дождивике",link:"https://images.unsplash.com/photo-1530041686259-53d26f863313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2619&q=80"},{title:"Toshi француз",link:"https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"},{title:"Toshi в костюме Тоторо",link:"https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80"},{title:"Toshi в джинсовке",link:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80"},{title:"Toshi на стиле",link:"https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}],renderer:function(e){Y.addItem(G(e))}},M);Y.renderItems(),W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_type_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(W.formSelector)).forEach((function(e){var t=new x(W,e),n=e.getAttribute("name");H[n]=t,t.enableValidation()}))})();