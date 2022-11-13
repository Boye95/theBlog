const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    displayImage: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('BlogPost', BlogPostSchema)