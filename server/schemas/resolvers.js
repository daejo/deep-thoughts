const { User, Thought } = require('../models');

const resolvers = {
  // INCHARGE OF "READ".
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    // get one Thought
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id })
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    //get a user by username
    user: async (parent, {username}) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    }
  },
  // INCHARGE OF "CREATE, UPDATE, AND DELETE".
  Mutation: {
    addUser: async (parent, arg) => {
      const user = await User.create(args);

      return user;
    },
    login: async () => {

    }
  }
};

module.exports = resolvers;