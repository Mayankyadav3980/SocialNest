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
    (this.id = users.length + 1),
      (this.name = name),
      (this.email = email),
      (this.password = password);
  }

  static addUser(name, email, password) {
    users.push(new UserModel(name, email, password));
  }

  static findUser(email, password) {
    return users.find((u) => u.email == email && u.password == password);
  }
}
