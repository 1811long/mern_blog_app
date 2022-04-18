import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Article from './Article'

export default function ListArticles() {
  
  const [listArticles, setListArticles] = useState([])

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setListArticles(data))
  },[])

  return (
    <div>
        {listArticles.map((article) => {
            return <Article key={article._id} article={article}/>
        })}
    </div>
  )
}
