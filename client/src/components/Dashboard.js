import { Avatar, Divider, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles';
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';

const useStyles = makeStyles(()=>({
  profile:{
    display:'flex',
    margin: '5%'
  },
  name:{
    margin: '20px'
  }
}))


const Dashboard = () => {
  const classes = useStyles( )
  const [user, setUser] = useState({});

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((users) => setUser(users));
      }
    });
    console.log(user[0])
  }, []);
  return (
    <>
      <Container>
      <div className={classes.profile}>
        <Avatar sx={{ bgcolor: 'red', width: 100, height: 100 , boxShadow: 10 }} aria-label="recipe">
                R
        </Avatar>
        <div className={classes.name}>
          <Typography>Name</Typography>
          <Typography>email</Typography>
          <Typography>PHONE NUMBER</Typography>
        </div>
      </div>
      <Divider/>
      <Typography sx={{mt: 3}} align="center" variant='h4'>My Posts</Typography>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>

    </Container>
    </>
    
  )
}

export default Dashboard