const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  const jsonBody = JSON.parse(body);

  for (let i = 0; i < jsonBody.length; i += 1) {
    console.log(`${jsonBody[i].id} ${jsonBody[i].name}`);
  }
});
