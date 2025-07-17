const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9]+$/.test(v);
      },
      message: props => `${props.value} is not alphanumeric!`
    }
  },
  posts: {
    type: Array,
    default: []
  },
  dp: {
    type: Object,
    default: {}
  },
  fullname: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
