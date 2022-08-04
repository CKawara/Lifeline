import { Box, Container } from '@mui/material'
import NavBar from "./NavBar";
import React from 'react'
import PostCard from './PostCard'

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Box>
      <Container>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </Container>
    </Box>
    </>
  )
}

export default HomePage