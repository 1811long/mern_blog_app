import React from 'react'
import { Button } from '@mui/material'
import { Link } from "react-router-dom";

export default function ButtonBar({ text,link }) {
    return (
        <Button color="inherit" href={link}>
            {text}
        </Button>
    )
}
