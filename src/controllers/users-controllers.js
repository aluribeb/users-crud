const catchError = require('../utils/catchError');
const Users = require('../models/Users');

const getAll = catchError(async(req, res) => {
    const users = await Users.findAll();
return res.json(users);
});

const create = catchError(async(req, res) => {
    const { first_name, last_name,email, password, birthday } = req.body;
    const user = await Users.create({ 
        first_name, 
        last_name,
        email, 
        password,
        birthday
  });
return res.status(201).json(user)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Users.destroy({ where: {id: id}});
    return res.sendStatus(204);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await Users.findByPk(id)
return res.json(user)
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name,email, password, birthday } = req.body;
const user = await Users.update(
            { 
                first_name, 
                last_name,
                email, 
                password,
                birthday
            }, 
            { where: {id}, returning: true }
    );
return res.json(user[1][0]);
});

module.exports = {
    getAll, 
    create, 
    remove,
    getOne,
    update
}