import React, { useState } from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {makeStyles} from '@mui/styles';
import { AppBar, Divider, Hidden, IconButton, List, ListItem, SwipeableDrawer, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Container } from '@mui/system';

const useStyles = makeStyles((theme)=> ({

    logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: 'black',
      fontSize: "20px",
        margin:'20px',
      "&:hover": {
        color: "#038B83",
      },
    },

}))

const NavBar = () => {
    const classes = useStyles()
    const history = useNavigate()
    const [open, setOpen]=useState(false)

  return (
    <Box sx={{ boxShadow: 3 }}>
        <AppBar color='transparent' position='sticky' >
            <Container maxWidth='xl' >
                <Toolbar>
                    <Typography className='logo' variant="h4" sx={{marginRight: 'auto', cursor: 'pointer'}} 
                onClick={()=>history('/')}>
                        LifeLine
                    </Typography>
                    <Hidden smDown>
                        <div className={classes.navlinks}>
                            <NavLink to="/" exact className={classes.link} >
                                Reach-Out
                            </NavLink>
                            <NavLink to="/dashboard" exact className={classes.link} >
                                <PersonOutlineIcon fontSize='large'/>
                            </NavLink>
                        </div>
                    </Hidden>
                    <Hidden smUp>
                    <IconButton onClick={()=> setOpen(true)} >
                        <MenuIcon />
                    </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <SwipeableDrawer open={open} 
            anchor={'right'} 
            onOpen={()=> setOpen(true)}
            onClose={()=> setOpen(false)}>
                <div>
                    <IconButton onClick={()=> setOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider/>
                <List >
                    <ListItem>
                    <NavLink to="/" exact className={classes.link} >
                            Reach-Out
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/dashboard" exact className={classes.link} >
                            Dashboard
                        </NavLink>
                    </ListItem>
                    <ListItem>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </AppBar>
    </Box>
  )
}

export default NavBar