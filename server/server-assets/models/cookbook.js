let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Cookbook'

// let Recipe = require('./recipe.js')


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: [{ type: String }],
  authorId: { type: ObjectId, ref: 'User', required: true },
  authorName: { type: String, required: true },
  recipes: [{ type: ObjectId, ref: 'Recipe' }]
})