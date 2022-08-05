import { Avatar, Card, CardActions, CardContent, CardHeader, Hidden, IconButton, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import heart from '../assets/heart.png'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { useNavigate, useParams } from 'react-router-dom';


const PostCard = ({post}) => {
    const history = useNavigate()
    const [hugs, setHugs]=useState(post.hugs)

    const id= useParams() 

    function handleClick(e) {
        e.preventDefault();

        fetch(`/posts/${post.id}/hug`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({hugs}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((resp) => console.log(hugs));
          } else {
            r.json().then((err) => console.log(err.errors));
          }
        });
      }
  return (
    <Card sx={{margin:5, boxShadow:5, borderRadius:7}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
            </Avatar>
            }
            title={post.title}
            subheader={post.user.name}
        />
        <CardContent>
            <Typography>
            {post.content}..... <Link onClick={()=> history(`/posts/${post.id}`)} color='#038B83' sx={{cursor: 'pointer'}} ><strong>More</strong></Link>
            </Typography>
        </CardContent>
        <CardActions >
            <IconButton aria-label="add to favorites" onClick={handleClick}>
            <img src={heart} alt="Logo" height={28}/>
            </IconButton> <Hidden smDown><span>{post.hugs} hugs</span></Hidden>
            <IconButton aria-label="share">
            <VolunteerActivismIcon sx={{color: 'black'}}/>
            </IconButton> <Hidden smDown><span>{post.withYou} I'm With you</span></Hidden>
            <IconButton aria-label="share" onClick={()=> history(`/coins/${post.id}`)}>
            <MapsUgcOutlinedIcon sx={{color:'#038B83'}}/>
            </IconButton> <Hidden smDown><span>20 comments</span></Hidden>
        </CardActions>
    </Card>
  )
}

export default PostCard