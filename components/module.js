let app = (function () {
  const users = [];

  function addUser(user) {
    users.push(user);
  }

  function print() {
    console.log(users);
  }


})();

// Вопрос - как получить доступ в функциям addUser, print ? 


