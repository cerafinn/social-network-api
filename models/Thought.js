const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId: {},
    reactionBody: {},
    username: {},
    createdAt: {},
  },
  {
    toJSON: {
      getters: true
    }
  }
)

const ThoughtSchema = new Schema(
  {
    thoughtText: {},
    createdAt: {},
    username: {},
    reactions: {},
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;