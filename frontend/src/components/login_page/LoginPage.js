import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        if (name == 'userName') setUserName(value)
        else setPassword(value)
    }

    function handleSubmit(event){
        axios.post('/api/auth',{
            email: userName,
            password: password
        },{
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setStatus('Login succesfully')
        })
        .catch((err) => {
            setStatus(err.response.data.msg)
        })
    }

    return (
        <div style={{
            textAlign:'center'
        }}>

            <div>
                <TextField 
                    label="Email"
                    type={'email'}
                    name='userName'
                    onChange={handleChange}
                    sx={{
                        width:'30%'
                    }}
                />
            </div>

            <br></br>

            <div>
                <TextField
                    label="Password" 
                    name='password'
                    type={'password'}
                    onChange={handleChange}
                    sx={{
                        width:'30%'
                    }}
                />
            </div>

            <br></br>
            <div>{status}</div>
            <br></br>

            <Button 
                variant="contained"
                onClick={handleSubmit}
            > 
                 Login
            </Button>
            
            <br></br>
            {userName}
            <br></br>
            {password}
        </div>
    )
}
