const express = require('express')
const articlesRoutes = require('./api/articles')
const userRoutes = require('./api/user')
const authRoutes = require('./api/auth')

const apiRouter = express.Router()

apiRouter.use('/articles',articlesRoutes)
apiRouter.use('/user',userRoutes)
apiRouter.use('/auth', authRoutes)

module.exports = apiRouter