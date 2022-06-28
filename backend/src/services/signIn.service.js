const throwError = require("../helpers/error.helper");
const { db } = require("../config/connection.config");
const Users = db.collection("Users");

class SignInService {
  static async addUser(data) {
    const { fullName, id, idPhoto, incomeSource, email, password } = data;
    await Users.add({ fullName, id, idPhoto, incomeSource, email, password })
      .then((docRef) => {
        return docRef.id;
      })
      .catch(() => {
        throwError(500, "Database error");
      });
  }
}

module.exports = SignInService;
