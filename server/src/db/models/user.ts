export {};
const mongoose = require('mongoose');
const { Roles } = require('../../data/authRoles');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    authType: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: Roles.user,
    },
    firstName: String,
    lastName: String,
    isBlocked: {
        type: Boolean,
        default: false,
    },
})
const User = mongoose.model('User', UserSchema);

module.exports = User;
