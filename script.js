let edit = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let save = document.querySelector('.popup__button');

// console.log(edit);
function editClick () {
    popup.classList.add('popup_opened');
    // console.log('Мы кликнули по элементу');
  }
edit.addEventListener('click', editClick);

let closepop = document.querySelector('.popup__close');

function closeClick () {
    popup.classList.remove('popup_opened');
  }

closepop.addEventListener('click', closeClick);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_name');
let infoInput = document.querySelector('.popup__item_info');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // nameInput.value;
    // infoInput.value;
    nameInput.getAttribute('value');
    infoInput.getAttribute('value');
    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile-info__name');
    let info = document.querySelector('.profile-info__info');
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    info.textContent = infoInput.value;
    
}
save.addEventListener('click', closeClick);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
