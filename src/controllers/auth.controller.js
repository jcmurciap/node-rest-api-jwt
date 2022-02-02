import User from '../models/User';

export const signUp = async (req, res) => {
    const {username,email,password,roles} = req.body;
    
    const newUser = new User({
        username,
        email,
        password: User.encryptPassword(password)
    })
    await newUser.save();
    res.json('signUp');
}

export const signIn = async (req, res) => {
    res.json('signIn');
}