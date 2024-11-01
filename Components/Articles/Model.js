const {mongoose} = require('../../db/mongobd')

const articleSchema = new mongoose.Schema({
    title: { type: String },
    likeCount: { type: Number, default: 0 },
    lastLikedAt: { type: Date, default: null }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = {Article}