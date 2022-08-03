import { Avatar, Button, CardHeader, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'

const Comments = () => {
  return (
    <div>  
        <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel  htmlFor="comment">comment</InputLabel>
            <OutlinedInput
                id="comment"
                type={'text'}
                value={'text'}
                //   onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <Button style={{color:'white',backgroundColor:'#038B83'}} disableElevation>
                            Add
                        </Button>        
                    </InputAdornment>
                }
                label="comment"
            />
        </FormControl>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'red', boxShadow: 5}} aria-label="recipe">
                 R
                </Avatar>
            }
            title={'NAME'}
            subheader="September 14, 2016"
        />
  </div>
  )
}

export default Comments