import { Box, Button, Grid, Hidden, TextField, Typography } from '@mui/material'
import support from '../assets/hug-icon-13.jpg'
import React, { useContext, useState } from 'react'
import Image from '../assets/heart.png'
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [open, setOpen] = useState(false);

  const history = useNavigate()


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return ( 
    <Grid container>
      <Grid item sm={5}>
        <Hidden mdDown>
          <div 
          style={{backgroundImage:`url(${Image}`, backgroundRepeat:'no-repeat',
            height: '100vh' }}>
            <Typography className='logo' variant='h3' sx={{p:3}}>
              Lifeline
            </Typography>
            <Typography variant='h5' className='logo' sx={{m:5}}>
              -You're not alone, We're in this together <img src={support} alt="Logo" height={30}/>
            </Typography>
          </div>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={7} style={{backgroundColor:'#E6E6FA', height:'100vh'}}>
        <Hidden mdUp>
          <Typography variant='h4' className='logo' sx={{p:3}}>
            Lifeline
          </Typography>
          <Typography variant='h5' className='logo' sx={{m:5}}>
            You're not alone, We're in this together <img src={support} alt="Logo" height={28}/>
          </Typography>
        </Hidden>
        <Box sx={{mt:11, p:7}}>
          <Typography variant='h5' style={{marginBottom:15}}>Log in here:</Typography>
          <form >
            <TextField  margin='dense' label="Name" id="name" variant="outlined" type='text' required fullWidth  />
            <TextField  margin='dense' label="Password" id='password' variant="outlined"  type="password" required fullWidth />
            <Button style={{color:'white',backgroundColor:'#038B83'}} disableElevation>
                Login
            </Button>           
          </form>
          <Typography>Don’t have an account? 
            <Button 
            sx={{color:'#038B83', fontWeight:'Bolder'}}
            onClick={handleOpen}
            >SignUp</Button>
          </Typography>
          <Signup open={open} handleClose={handleClose}/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login