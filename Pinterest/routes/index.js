var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const userModel=require('./users'); // Assuming users.js exports the User model
const postModel=require('./posts'); // Assuming posts.js exports the Post model

mongoose.connect('mongodb://localhost:27017/pinterest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res, next) {
  try {
    let user = await userModel.create({
      username: 'testuser1',
      email: 'hello',
      password: 'password123',
      fullname: 'Test User'
    });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'User creation failed', error: error.message });
  }
});
module.exports = router;
