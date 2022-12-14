import { Card, CardActions, CardContent, Grid, Hidden, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import heart from '../assets/heart.png'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';import BorderColorIcon from '@mui/icons-material/BorderColor';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import {  useNavigate } from 'react-router-dom';


const ProfileCard = () => {
    const history = useNavigate()
    return (
        <Grid item xs={12} sm={4} style={{marginTop : 30}}>
            <Card sx={{ maxWidth: 345, height: 'auto',margin:5, boxShadow:5, borderRadius:7 }}>
                <CardContent>
                    <Typography>Title</Typography>
                    <Grid display='flex' justifyContent="flex-end"> 
                        <IconButton aria-label="delete" sx={{color:"red"}}>
                        <DeleteForeverOutlinedIcon sx={{float: 'right' }}/>
                        </IconButton>
                        <IconButton aria-label="delete" sx={{color:"#038B83"}}>
                        <BorderColorIcon />
                        </IconButton>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.... <Link onClick={()=> history(`/posts/:id`)} color='#038B83' sx={{cursor: 'pointer'}} ><strong>More</strong></Link>
                    </Typography>
                </CardContent>
                <CardActions >
                        <IconButton aria-label="add to favorites">
                        <img src={heart} alt="Logo" height={28}/>
                        </IconButton> <Hidden smDown><span>20</span></Hidden>
                        <IconButton aria-label="share">
                        <VolunteerActivismIcon sx={{color: 'black'}}/>
                        </IconButton> <Hidden smDown><span>20</span></Hidden>
                        <IconButton aria-label="share" onClick={()=> history(`/posts/:id`)}>
                        <MapsUgcOutlinedIcon sx={{color:'#038B83'}}/>
                        </IconButton> <Hidden smDown><span>20</span></Hidden>
                    </CardActions>
        </Card>
        </Grid>

    )
}

export default ProfileCard