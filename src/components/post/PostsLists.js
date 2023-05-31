import React from 'react'
import Post from './index'
import { Box, Text } from '@chakra-ui/react'

export default function PostsLists({posts}) {
  return <Box px="4" align="center">
    {posts?.length===0 ? <Text textAlign="center" fontSize="xl">No posts yet... Feeling a bit lonely here !</Text>: posts?.map(post=><Post key={post.id} post={post} />)}
  </Box>   
}
