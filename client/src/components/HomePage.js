import { Box, Container } from '@mui/material'
import React from 'react'
import AddEntry from './AddEntry'
import PostCard from './PostCard'

const HomePage = () => {
  return (
    <>
    <Box>
      <AddEntry/>
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