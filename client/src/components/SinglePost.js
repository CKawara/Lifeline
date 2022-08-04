import { Avatar, CardHeader, Container, Divider, IconButton, Paper, Typography } from '@mui/material'
import NavBar from "./NavBar";
import React from 'react'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import heart from '../assets/heart.png'
import Comments from './Comments'

const SinglePost = () => {
  return (
    <>
        <NavBar/>
        <Container >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red', width: 70, height: 70 , boxShadow: 10 }} aria-label="recipe">
                    R
                    </Avatar>
                }
                title={'NAME'}
            />
            <Paper elevation={7} sx={{p:5}}>
                <div>
                    <Typography sx={{mb:3, fontSize:30}}>Shrimp and Chorizo Paella</Typography>
                    <Typography sx={{mb:3}}>This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                    <IconButton aria-label="add to favorites">
                        <img src={heart} alt="Logo" height={28}/>
                    </IconButton> <span>hugs</span>
                    <IconButton aria-label="share">
                    <VolunteerActivismIcon sx={{color: 'black'}}/>
                    </IconButton> <span>I'm With you</span>
                    <IconButton aria-label="share"></IconButton>
                    <Divider/>
                    <Typography variant='h6' sx={{mt:1}}>Comments</Typography>
                    <Comments/>
                </div>
            </Paper>
        </Container>
    </>
  )
}

export default SinglePost