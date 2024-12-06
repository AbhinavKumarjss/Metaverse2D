const UserSchema = require('../schema/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;


////////////////////
// Login Handler  //
////////////////////
const loginHandler = async (req, res) => {
    try {
        const user = await UserSchema.findOne({ email: req.body.email });

        if (user.password === req.body.password) {
            const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '2 days' });
            res.status(200).json({
                message: `Welcome ${user.name}`,
                token: `Bearer ${token}`,
            });
        }
        else {
            res.status(400).send('Invalid Password');
        }
    }
    catch (err) {
        res.status(400).send('User not found');
    }
};

///////////////////////
// Register Handler  //
///////////////////////

const registerHandler = async (req, res) => {

    const user = await UserSchema.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('Email already exists');
    }
    try {
        const newUser = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });
        await newUser.save()
            .then((result) => {
                res.status(200).send(`User ${result.name} has been registered`);
            })
            .catch((err) => {
                res.status(400).send(err);
            });
    }
    catch (err) {
        res.status(400)
    };
};

///////////////////////
//  Update Handler   //
///////////////////////
const updateHandler = async (req, res) => {
    try {
        const user = await UserSchema.findOne({ email: req.body.email });
        if(user.password == req.body.password){
            user.password = req.body.newpassword;
            await user.save();
            res.status(200).send('Password Updated');
        }
    }
    catch (err) {
        res.status(400).send('User not found');
    }
}

////////////////////////////////

module.exports = { registerHandler, loginHandler ,updateHandler};