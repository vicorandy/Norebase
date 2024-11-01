const express = require('express')
const {getArticleLikes,likeArticle} = require('./Controller')

const articleRouter = express.Router()

articleRouter.route('/:id/likes').get(getArticleLikes)
articleRouter.route('/like-article').post(likeArticle)

module.exports =articleRouter