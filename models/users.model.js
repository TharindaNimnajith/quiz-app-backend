// noinspection JSValidateTypes

const mongoose = require('mongoose')
const {userTypes, userLevels, quizLevels, answers, lessons} = require('../config/enums.config')

const Schema = mongoose.Schema

const UsersSchema = new Schema({
  firstName: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },
  lastName: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  userType: {
    type: String,
    enum: userTypes,
    required: false,
    unique: false,
    trim: true,
    default: 'User'
  },
  levels: [{
    lesson: {
      type: Number,
      enum: lessons,
      required: false,
      unique: false,
      trim: true
    },
    level: {
      type: String,
      enum: userLevels,
      required: false,
      unique: false,
      trim: true
    }
  }],
  total: {
    type: Number,
    required: false,
    unique: false,
    trim: true
  },
  results: [{
    lesson: {
      type: Number,
      enum: lessons,
      required: false,
      unique: false,
      trim: true
    },
    quizLevel: {
      type: String,
      enum: quizLevels,
      required: true,
      unique: false,
      trim: true
    },
    question: {
      type: Number,
      required: true,
      unique: false,
      trim: true
    },
    studentAnswer: {
      type: Number,
      enum: answers,
      required: true,
      unique: false,
      trim: true
    },
    correctAnswer: {
      type: Number,
      enum: answers,
      required: true,
      unique: false,
      trim: true
    }
  }]
}, {
  timestamps: true,
  collection: 'Users'
})

module.exports = mongoose.model('Users', UsersSchema)
