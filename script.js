// //Задача 1: Відмалюй список користувачів
// const users = [
//     { name: 'Anna', email: 'anna@mail.com' },
//     { name: 'Bob', email: 'bob@mail.com' }
// ];
// const spisok = document.querySelector('.spisok');
// users.forEach((user) => {
//     const strong = document.createElement('strong');
//     strong.textContent = '('+ user.email + ')';
//     spisok.append(strong);
// });



// Задача 2: Додавання нового елемента в DOM із форми
// const form = document.getElementById('taskForm');
// const input = document.getElementById('taskInput');
// const list = document.getElementById('taskList');
//
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     const text = input.value.trim();
//
//     if (text !== '') {
//         const li = document.createElement('li');
//         li.innerText = text;
//         list.appendChild(li);
//         input.value = '';
//     }
// });




//Задача 3: Оновлення тексту елементів через innerText

// let todoItems = document.querySelectorAll('#todo li');
// todoItems.forEach((item, index) => {
// item.innerText = `${index + 1}. ${item.innerText}`;
// });



//Задача 4: Клік по картці — показати деталі (addEventListener)
const products = [
    { name: 'Phone', price: 500, description: 'Smartphone with 64GB' },
    { name: 'Headphones', price: 100, description: 'Noise-cancelling' }
];
