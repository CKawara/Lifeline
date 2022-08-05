import { Box, Container, Fab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddEntry from './AddEntry'
import AddIcon from '@mui/icons-material/Add';
import PostCard from './PostCard'

const HomePage = () => {
  const [open, setOpen]=useState(false)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box>
    <Fab size="small" sx={{backgroundColor:"#038B83", color:"white", mb:1, top: '70%'}} aria-label="add" onClick={handleOpen}>
        <AddIcon />
    </Fab>
      <AddEntry open={open} handleClose={handleClose}/>
      <Container>
        {
          posts.map((post)=>(
            <PostCard key={post.id} post={post}/>
          ))
        }
      </Container>
    </Box>
    </>
  )
}

export default HomePage