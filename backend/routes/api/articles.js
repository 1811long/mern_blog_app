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
    const articles = await ArticleModel.find({})
    // console.log(articles)
    res.json(articles)
})


//Create an article
articlesRoutes.post('/new-article',(req,res) =>{
    let newArticle = new ArticleModel(req.body)
    newArticle.save((err,data) =>{
        if (err) return console.log(error)
        res.send("New article created")
    })
})

//Read an article
articlesRoutes.get('/:articleId',async (req,res) => {
    const articleId =  req.params.articleId
    let article = await ArticleModel.findById(articleId).exec()
    res.json(article)
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
        console.log(error)
    }
})

//Delete an article
articlesRoutes.delete('/delete/:articleId',async (req,res) => {
    const articleId = req.params.articleId
    try{
        const deleteRes = await ArticleModel.deleteOne({_id:articleId})
        res.send("Deleted successfully")
    }catch(err){
        console.log(err)
    }
})

module.exports = articlesRoutes