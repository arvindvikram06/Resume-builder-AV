const express = require('express');
const User = require('../models/userModel');
const app = express.Router();
const uploadmiddleware = require('./multermiddleware')

app.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({ username: req.body.username, password: req.body.password });
        console.log(result)
        if (result) {
            res.send(result);
        } else {
            res.status(401).send('credentials does not match');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post('/register', async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });

        if (existingUser) {
            res.status(400).send('Registration failed: Username already exists');
        } else {
            const newUser = new User(req.body);
            await newUser.save();
            res.send('Registration Successful');
        }
    } catch (error) {
        res.status(500).send('Registration failed: Internal Server Error');
    }
});

app.post('/save',uploadmiddleware.single("photo"),async(req,res)=>{
    const photo = req.file.filename
    const id = req.file.originalname
//    console.log(req.file)
//    await User.findByIdAndUpdate({_id:id},{photo: photo})
//     .then((data)=>{
//         console.log('uploaded successfull (photo)')
//         console.log(data)
//         res.send(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
try {
    const imageUploaded = await User.findByIdAndUpdate({ _id: id }, { photo: photo })
    const replace = await User.findByIdAndUpdate({ _id: id }, { photo: photo })
    res.send(replace)
    console.log(imageUploaded)
    console.log(replace)
    console.log(photo)
} catch (error) {
    console.log(error)
}
})

app.post('/update', async (req, res) => {
    try {
        const no=await User.findOneAndUpdate({ _id: req.body._id }, req.body);
        // console.log(no)
        const user = await User.findOne({ _id: req.body._id });
        res.send(user);
        // console.log(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Update failed', error: error.message });
    }
});



module.exports = app;
