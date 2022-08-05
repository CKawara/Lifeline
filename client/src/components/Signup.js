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
const Signup = ({ open, handleClose, onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");  
 
  const classes = useStyles()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        number: number,
        email: email
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Sign Up Here:</DialogTitle>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField  
           margin='dense' 
           label="Name" 
           id="name" 
           variant="outlined" 
           type='text'  
           value={name}
           onChange={(e) => setName(e.target.value)}
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

export default Signup