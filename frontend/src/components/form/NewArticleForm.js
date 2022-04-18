import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios'

export default function NewArticleForm() {
    const [inputs, setInputs] = useState({})
    async function createNewArticle(){
        const article = inputs
        return axios({
            method:'post',
            url:'/api/articles/new-article',
            data: article,
            headers:{
                'Content-type':'application/json'
            }
        })
    }
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setInputs({...inputs,[name]:value})
    }
    function handleSubmit(event){
        createNewArticle()
            .then(res => console.log(res))
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
                variant = "standard"
                onChange={handleChange}
                rows={20}
                fullWidth
            />
            <br></br>
            <br></br>
            <Button 
                variant="outlined"
                onClick={handleSubmit}
                href='/articles'
            > 
                  Post your new article ! 
            </Button>
        </form>
    )
}
