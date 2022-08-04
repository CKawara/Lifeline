import { Dialog, DialogTitle, TextField } from '@material-ui/core'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {useState } from 'react'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%'
  },
  btn:{
    backgroundColor:'#7B6D8D',
    color: '#E5D9EB',
    padding: '2%',
    width: '30%',
    fontWeight: 'bolder'
  }
}));
const Signup = ({ open, handleClose }) => {
  // const {setUser} = useContext(UserContext)
  

 
  const classes = useStyles()

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Sign Up Here:</DialogTitle>
        <form className={classes.root}>
          <TextField  margin='dense' label="Name" id="name" variant="outlined" type='text'  required fullWidth  />
          <TextField  margin='dense' label="Number" id='number' variant="outlined" type="number"  required fullWidth />
          <TextField  margin='dense' label="Email" id='email' variant="outlined" type="email"  required fullWidth />
          <TextField  margin='dense' label="Password" id='password' variant="outlined" type="password"  required fullWidth />
          <Button style={{color:'white',backgroundColor:'#038B83'}} disableElevation>
            Sign Up
          </Button>        
        </form>
    </Dialog>
  )
}

export default Signup