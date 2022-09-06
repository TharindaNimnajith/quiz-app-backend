// noinspection JSValidateTypes

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SettingsSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  value: {
    type: Number,
    required: true,
    unique: false,
    trim: true
  }
}, {
  timestamps: true,
  collection: 'Settings'
})

module.exports = mongoose.model('Settings', SettingsSchema)
