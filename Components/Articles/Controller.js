const { model } = require('mongoose')
const {Article} = require('../Articles/Model')

async function getArticleLikes (req,res){
    const {id} = req.params
    if(!id) {
        req.status(400)
        req.json({message:'no id was provided'})
        return null
    }

    const article = await Article.findById(id)

    if(!article) {
        res.status(404)
        res.json({message:'no articel with that id was found'})
        return null
    }

    const likes = article.likeCount

    res.status(200)
    res.json({
        message:'request was successful',
        article,
        likes
    })
}

 async function likeArticle (req,res){
    const {id} = req.body
    console.log(id)
    if(!id) {
        req.status(400)
        req.json({message:'no id was provided'})
        return null

    }

    const article = await Article.findById(id)
    article.likeCount += 1
    article.save()

    res.status(200)
    res.json({message:'request successful',article})

 }

module.exports ={getArticleLikes,likeArticle}