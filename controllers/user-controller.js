const { User } = require('../models');

const UserController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get user by ID
  // add new user
  // add new friend
  // update user by id
  // delete by id -- remove associated thoughts?
  // remove friend 
};

module.exports = UserController