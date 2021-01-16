// const { stringify } = require("postcss");

const BASE_URL = 'http://localhost:3000';

const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'Большая новая тестовая книга по JS', author: "Olena Stadnyk", rating: 9.99 }),
  };


fetch(`${BASE_URL}/books/1`, options)
    .then(res => res.json())
    .then(console.log);

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
// }

// updateBookById({ title: 'Большая новая книга по NODEJS' }, 22);

// updateBookById({ rating: 1 }, 18);

// updateBookById({ rating: 4, author: 'Манго' }, 17);