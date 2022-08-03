import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import heart from '../assets/heart.png'
import support from '../assets/hug-icon-13.jpg'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { useNavigate } from 'react-router-dom';


const PostCard = () => {
    const history = useNavigate()
  return (
    <Card sx={{margin:5, boxShadow:5, borderRadius:7}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
            </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardContent>
            <Typography>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like..... <Link onClick={()=> history(`/posts/:id`)} color='#038B83' sx={{cursor: 'pointer'}} ><strong>More</strong></Link>
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <img src={heart} alt="Logo" height={28}/>
            </IconButton> <span>20 hugs</span>
            <IconButton aria-label="share">
            <img src={support} alt="Logo" height={28}/>
            </IconButton> <span>20 I'm with you</span>
            <IconButton aria-label="share">
            <MapsUgcOutlinedIcon sx={{color:'#038B83'}}/>
            </IconButton> <span>20 comments</span>
        </CardActions>
    </Card>
  )
}

export default PostCard