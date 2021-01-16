const BASE_URL = 'http://localhost:3000';

const newBook = {
    title: "Большая тестовая книга по CSS",
      author: "Я",
      genres: [
        "CSS"
      ],
      rating: 9,
}




function addBook(book) {
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(book),
    };
    return fetch(`${BASE_URL}/books`, options)
    .then(res => res.json())
}

// addBook({
//     title: "Тестовая книга по CSS",
//       author: "Я",
//       genres: [
//         "CSS"
//       ],
//       rating: 7,
// }).then(renderBook)

// addBook({
//     title: "Тестовая книга по HTML",
//       author: "Я",
//       genres: [
//         "CSS"
//       ],
//       rating: 5,
// }).then(renderBook).catch(error => console.log(error);)

function renderBook(book) {
    console.log('Пришел ответ от бекенда, можна рисовать');
    console.log(book);
}