import { Button, Dialog, DialogTitle, TextareaAutosize, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

import React, { useState } from 'react'

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

const AddEntry = ({open, handleClose}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const classes = useStyles()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>hare with us:</DialogTitle>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField  
           margin='dense'
           label="Title" 
           id="name" 
           variant="outlined" 
           type='text'  
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           required fullWidth  />
           <textarea 
           id="content" 
           name="content" 
           rows="7" 
           cols="50"
           placeholder='Whats on your mind...'
           value={content}
           onChange={(e) => setContent(e.target.value)}
           >
           </textarea>

          <Button type='submit' style={{color:'white',backgroundColor:'#038B83', marginTop: 10}} disableElevation>
            Share
          </Button>        
        </form>
    </Dialog>
  )
}

export default AddEntry