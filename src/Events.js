/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
import { createElement } from 'react';

export function createButton() {
    const elem = document.createElement('button');
    elem.textContent = 'Удали меня';
    elem.addEventListener('click', () => {
        document.body.removeChild(elem);
    });
    document.body.appendChild(elem);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const elemList = document.createElement('ul');
    document.body.appendChild(elemList);
    for (let item of arr) {
        const child = document.createElement('li');
        child.textContent = item;
        child.addEventListener('mouseover', () => {
            child.setAttribute('title', item);
        });
        elemList.appendChild(child);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const defaultText = 'tensor';
    const elem = document.createElement('a');
    elem.textContent = defaultText;
    elem.href = 'https://tensor.ru/';

    const handler = (e) => {
        if (elem.textContent === defaultText) {
            elem.textContent += ` ${elem.href}`;
            e.preventDefault();
        }
    };
    elem.addEventListener('click', handler);
    document.body.appendChild(elem);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.appendChild(button);

    ul.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName === 'LI') {
            e.target.textContent += '!';
        }
    });
    button.addEventListener('click', () => {
        const child = document.createElement('li');
        child.textContent = 'Пункт';
        ul.appendChild(child);
    });
}
