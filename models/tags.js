const mongoose = require('mongoose');
const TagSchema = new mongoose.Schema({
    _id: String,
    Command: String,
    Content: String,
});

module.exports = mongoose.model('tags', TagSchema);