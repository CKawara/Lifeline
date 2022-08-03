import { Box, Container } from '@mui/material'
import React from 'react'
import PostCard from './PostCard'

const HomePage = () => {
  return (
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
  )
}

export default HomePage