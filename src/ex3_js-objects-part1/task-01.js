function createUser() {
  const user = {};

  user.name = "Anastasia";
  user.age = "20";
  user["go to school"] = true;
  delete user["go to school"];

  return user;
}

module.exports = createUser;