import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function ArticlePage() {
  let params = useParams()
  const [article, setArticle] = useState('')

  async function getArticle(){
      const response = await axios.get('/api/articles/'+params.articleId)
      const data = await response.data
      return data
  }

  useEffect(() => {
      getArticle()
        .then(res => setArticle(res))
  }, [])

  return (
    <div>
        <h1>{article.title}</h1>
        <h3>Author: {article.author}</h3>
        <p>{article.content}</p>
    </div>
  )
}
