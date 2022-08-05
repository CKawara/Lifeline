import React, { useState } from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {makeStyles} from '@mui/styles';
import { AppBar, Avatar, Divider, Hidden, IconButton, List, ListItem, SwipeableDrawer, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';import { Container } from '@mui/system';
import Contacts from './Contacts';

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
    navlinks:{
        display:'flex'
    }

}))

const NavBar = ({ user, setUser }) => {
    const classes = useStyles()
    const history = useNavigate()
    const [open, setOpen]=useState(false)
    const [opens, setOpens ]=useState(false)



    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }  
    const handleOpen = () => {
        setOpens(true);
      };
      const handleClose = () => {
        setOpens(false);
      };
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
                            <NavLink to="/" exact className={classes.link} onClick={handleOpen}>
                                Reach-Out
                            </NavLink>
                            <NavLink to="/dashboard" exact className={classes.link} >
                                <Avatar sx={{ bgcolor: 'red', width: 35, height: 35 }} aria-label="recipe">
                                    R
                                </Avatar>
                            </NavLink>
                            <NavLink to="/" exact className={classes.link} onClick={handleLogoutClick}>
                                <LogoutIcon  />
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
                    <NavLink to="/" exact className={classes.link} onClick={handleOpen}>
                            Reach-Out
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/dashboard" exact className={classes.link} >
                            Dashboard
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/" exact className={classes.link} onClick={handleLogoutClick} >
                                Log-Out
                        </NavLink>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </AppBar>
        <Contacts opens={opens} handleClose={handleClose}/>
    </Box>
  )
}

export default NavBar