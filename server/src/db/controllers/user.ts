export {};
const mongoose = require("mongoose");
const User = require('../models/user');

function createUser(req: any, res: any) {
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: 'test',
        lastName: 'test1',
    });

    newUser.save()
        .then(
            () => res.status(200).send('User has been saved successfully.'),
            (err: any) => console.error(err),
        )
}

module.exports = {
    createUser,
}
