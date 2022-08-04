import { Box, Button, Grid, Hidden, TextField, Typography } from '@mui/material'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
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
          objectFit:'fit' }}>
            <Typography className='logo' variant='h3' sx={{m:3}}>
              Lifeline
            </Typography>
          </div>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={7} style={{backgroundColor:'#E6E6FA', height:'100vh'}}>
        <Hidden mdUp>
          <Typography className='logo'>
            Lifeline
          </Typography>
        </Hidden>
        <Box sx={{p:5}}>
          <Typography style={{marginBottom:15}}>Log in here:</Typography>
          <form >
            <TextField  margin='dense' label="Name" id="name" variant="outlined" type='text' required fullWidth  />
            <TextField  margin='dense' label="Password" id='password' variant="outlined"  type="password" required fullWidth />
            <button >Log In</button>
          </form>
          <Typography>Don’t have an account? 
            <Button 
            sx={{color:'black', fontWeight:'Bolder'}}
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