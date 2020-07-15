const request = require('request');
const process = require('process');

const func = process.argv[2];
const parameter = process.argv[3];
const bookName = process.argv[4];

if (func === 'list') {
  request.get('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
    const jsonBody = JSON.parse(body);
    for (let i = 0; i < jsonBody.length; i += 1) {
      console.log(`${jsonBody[i].id} ${jsonBody[i].name}`);
    }
  });
} else if (func === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${parameter}`, (error, response, body) => {
    const jsonBody = JSON.parse(body);
    if (jsonBody === {}) {
      console.log('查無此id書籍');
    } else {
      console.log(`${jsonBody.id} ${jsonBody.name}`);
    }
  });
} else if (func === 'delete') {
  // eslint-disable-next-line no-unused-vars
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${parameter}`, (error, _response) => {
    if (error === null) {
      console.log('刪除成功');
    } else {
      console.log('刪除失敗,無此id書籍');
    }
  });
} else if (func === 'create') {
  request.post({ url: 'https://lidemy-book-store.herokuapp.com/books', form: { name: parameter } }, (error, response, body) => {
    const jsonBody = JSON.parse(body);
    if (jsonBody.id !== undefined) {
      console.log(`新增成功，id : ${jsonBody.id}`);
    } else {
      console.log('新增失敗');
    }
  });
} else if (func === 'update') {
  request.patch({ url: `https://lidemy-book-store.herokuapp.com/books/${parameter}`, form: { name: bookName } }, (error, response, body) => {
    const jsonBody = JSON.parse(body);
    if (jsonBody.id !== undefined) {
      console.log(`修改成功，id : ${jsonBody.id}`);
    } else {
      console.log('修改失敗,無此id書籍');
    }
  });
} else {
  console.log('無此功能');
}
