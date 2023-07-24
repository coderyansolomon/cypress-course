'use client'

import { Button } from "@mui/material"

export default function PostButton(){

    function handleClick(){
        fetch('http://localhost:3000/examples', {method: 'POST'}).then((data) => {
            console.log({data})
        }).catch(() => {
            console.log('An error occured')
        })
    }

    return (
        <Button onClick={handleClick}>
            Post Data
        </Button>
    )
}