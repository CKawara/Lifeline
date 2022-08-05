import { Button, Dialog, DialogTitle, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

import React from 'react'

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

const AddEntry = () => {
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>What's on Your mind:</DialogTitle>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField  
           margin='dense' 
           label="Name" 
           id="name" 
           variant="outlined" 
           type='text'  
           required fullWidth  />
          <TextField  
           margin='dense' 
           label="Number" 
           id='number' 
           variant="outlined" 
           type="number"  
           value={number}
           onChange={(e) => setNumber(e.target.value)}
           required fullWidth />
          <TextField  
           margin='dense' 
           label="Email" 
           id='email' 
           variant="outlined" 
           type="email"  
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required fullWidth />
          <TextField  
           margin='dense' 
           label="Password" 
           id='password' 
           variant="outlined" 
           type="password"  
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required fullWidth />
          <Button type='submit' style={{color:'white',backgroundColor:'#038B83'}} disableElevation>
            Sign Up
          </Button>        
        </form>
    </Dialog>
  )
}

export default AddEntry