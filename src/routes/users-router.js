const { getAll, create, remove, getOne, update } = require('../controllers/users-controllers.js');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/users")
		.get(getAll)
        .post(create)

usersRouter.route("/users/:id")
        .get(getOne)
        .delete(remove)
        .put(update)

module.exports = usersRouter;