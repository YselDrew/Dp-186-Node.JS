const userService = require('/user.service');

class UsersController {
  createUser(req, res, next) {
    const user = userService.createUser(req.body);
    res.json(user);
  }
}

const usersController = new UsersController();
module.export = usersController;
