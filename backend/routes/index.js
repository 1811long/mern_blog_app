const express = require('express')
const articlesRoutes = require('./api/articles')

const apiRouter = express.Router()
apiRouter.use('/articles',articlesRoutes)

module.exports = apiRouter