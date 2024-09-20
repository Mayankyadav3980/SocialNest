let users = [
  {
    id: 1,
    name: "Mayank",
    email: "mayank@gmail.com",
    password: "abc",
  },
  {
    id: 2,
    name: "vivek",
    email: "vivek@gmail.com",
    password: "def",
  },
];

export default class UserModel {
  constructor(name, email, password) {
    (this.id = users.lenght + 1),
      (this.name = name),
      (this.email = email),
      (this.password = password);
  }

  static addUser(name, email, password) {
    let newUser = new UserModel(name, email, password);
    users.push(newUser);
  }

  static findUser(email, password) {
    return (isValid = users.find(
      (u) => u.email == email && u.password == password
    ));
  }
}
