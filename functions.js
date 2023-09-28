const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    let user = {firstName: 'Brad', lastName: 'Traversy'};
    return user;
  },
  fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(error => console.error(error)),

}

module.exports = functions;