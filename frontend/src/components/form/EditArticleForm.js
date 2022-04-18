import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'

export default function EditArticleForm() {

    let params = useParams()
    const [inputs, setInputs] = useState({})

    useEffect(() => {
        const articleId = params.articleId
        axios.get(`/api/articles/${articleId}`)
            .then((initialPost) => initialPost.data)
            .then(data => setInputs(data))
    }, [])

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        console.log(name + ' ' + value)
        setInputs({...inputs,[name]:value})
    }

    function handleEdit(){
        const article = inputs
        axios.put(`/api/articles/edit/${params.articleId}`,
            article
        ).then(response => console.log(response))
    }

    return (
        <form>
            <TextField
                label="Author"
                name="author"
                value={inputs.author ?? ""}
                variant="standard"
                onChange={handleChange}
                fullWidth
            />

            <br></br>
            <br></br>

            <TextField
                label="Title"
                name="title"
                value={inputs.title ?? ""}
                variant="standard"
                onChange={handleChange}
                fullWidth
            />

            <br></br>
            <br></br>

            <TextField
                label="Description"
                name="description"
                value={inputs.description ?? ""}
                variant="standard"
                multiline
                onChange={handleChange}
                rows={4}
                fullWidth
            />

            <br></br>
            <br></br>

            <TextField
                label="Your Content here "
                name="content"
                value={inputs.content ?? ""}
                multiline
                variant="standard"
                onChange={handleChange}
                rows={20}
                fullWidth
            />
            <br></br>
            <br></br>

            <Button
                variant="outlined"
                onClick={handleEdit}
                href={`/articles/${params.articleId}`}
            >
                Edit your article
            </Button>
        </form>
    )
}
