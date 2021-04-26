const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {},
    email: {},
    thoughts: {},
    friends: {}
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;