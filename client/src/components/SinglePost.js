import { Avatar, CardHeader, Container, Divider, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import heart from '../assets/heart.png'
import Comments from './Comments'
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const {id}= useParams();
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`/posts/${id}`)
      .then((r) => r.json())
      .then(setPosts);
      console.log(posts[5])

  }, []);

  function handleclick(e) {
    e.preventDefault();
    
  }

  return (
    <>
        <Container >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red', width: 70, height: 70 , boxShadow: 10 }} aria-label="recipe">
                    R
                    </Avatar>
                }
                title={posts.title}
            />
            <Paper elevation={7} sx={{p:5}}>
                <div>
                    <Typography sx={{mb:3, fontSize:30}}>{posts.title}</Typography>
                    <Typography sx={{mb:3}}>{posts.content}
                    </Typography>
                    <IconButton aria-label="add to favorites">
                        <img src={heart} alt="Logo" height={28}/>
                    </IconButton> <span>hugs</span>
                    <IconButton aria-label="like" onClick={handleclick}>
                    <VolunteerActivismIcon sx={{color: 'black'}}/>
                    </IconButton> <span>I'm With you</span>
                    <IconButton aria-label="support"></IconButton>
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