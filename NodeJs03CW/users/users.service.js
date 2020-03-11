class UserService {
  createUser(userData) {
    return {
      id: 20,
      ...userData,
    };
  }
}

const userService = new UserService();
module.exports = userService;
