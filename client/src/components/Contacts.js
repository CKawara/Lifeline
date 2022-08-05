import { Dialog, DialogTitle } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyles = makeStyles(theme => ({

}));

const Contacts = ({opens, handleClose}) => {
  const classes = useStyles()
  return (
    <Dialog sx={{p: 5}} fullWidth open={opens} onClose={handleClose}>
        <DialogTitle>Talk to one of our Therapists</DialogTitle>
        <p>Dr John Doe<a href="tel:+254703949349">+254703949349</a></p>
        <p>Dr jane Doe<a href="tel:+254703949349">+254703949349</a></p>

    </Dialog>  
    )
}

export default Contacts