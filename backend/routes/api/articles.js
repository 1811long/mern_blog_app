const express = require('express')
const articlesRoutes = express.Router()
let Articles = require('../../articles')
const bodyParser = require('body-parser');

const mongoose = require('mongoose')
const uri = process.env.ATLAS_URI
mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
)
var conn = mongoose.connection
conn.on('connected', function(){
    console.log('database is connected successfully');
})


const ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    description: String
},{
    collection:'Article'
})

const ArticleModel = mongoose.model("Article", ArticleSchema)

articlesRoutes.use(express.json())
articlesRoutes.use(express.text())

//Get all articles
articlesRoutes.get('/',  async (req,res) => {
    try{
        const articles = await ArticleModel.find({})
        res.json(articles)
    }catch(err){
        res.send(err.message)
    }
})

//Create an article
articlesRoutes.post('/new-article',async (req,res) =>{
    let newArticle = new ArticleModel(req.body)
    try{
        var createResponse = await newArticle.save()
    }catch(err){
        res.send(err.message)
    }
})

//Read an article
articlesRoutes.get('/:articleId',async (req,res) => {
    const articleId =  req.params.articleId
    try{
        var article = await ArticleModel.findById(articleId).exec()
        res.json(article)
    }catch(err){
        res.send(err.message)
    }
})


//Update an article
articlesRoutes.put('/edit/:articleId', async (req,res) => {
    const articleId = req.params.articleId
    const articleEdit = req.body
    try{
        var updateRes = await ArticleModel.updateOne({_id:articleId},{$set:articleEdit})
        console.log("Updated successfully")
        res.send("Updated successfully")
    }catch(err){
        res.send(err.message)
    }
})

//Delete an article
articlesRoutes.delete('/delete/:articleId',async (req,res) => {
    const articleId = req.params.articleId
    try{
        const deleteRes = await ArticleModel.deleteOne({_id:articleId})
        res.send("Deleted successfully")
    }catch(err){
        res.send(err.message)
    }
})

module.exports = articlesRoutes