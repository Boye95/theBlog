const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
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
        url: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    },
    tags: {
        type: Array,
        required: false
    },
    authorInfo: {
        type: Object,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('BlogPost', BlogPostSchema)