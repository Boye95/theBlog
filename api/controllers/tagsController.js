const Tags = require('../models/tagsModel');
const mongoose = require('mongoose');


// create tags
exports.createTags = async (req, res) => {
    try {
        const newTag = await Tags.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                tag: newTag,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
}