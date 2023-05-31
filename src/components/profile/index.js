import { Button, Divider, Flex, HStack, Stack,Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import PostsLists from '../post/PostsLists';
import { usePosts } from '../../hooks/posts';
import { useParams } from 'react-router-dom'
import Avatar from './Avatar';
import { useUser } from '../../hooks/users';
import { format } from 'date-fns/esm';
import EditProfile from './EditProfile';
import { useAuth } from '../../hooks/auth';

export default function Profile() {
  const {id} = useParams();
  const {posts, isLoading:postsLoading} = usePosts(id);
  const {user:authUser,isLoading:authLoading} = useAuth()
  const {user,isLoading:userLoading} = useUser(id);
  const {isOpen,onOpen,onClose} = useDisclosure();

  if(userLoading) return "Loading..."

  return (
    <Stack spacing ="5">
        <Flex p={["4","6"]} pos="relative" align="center">
            <Avatar size="2xl" user={user}/>
            {!authLoading && authUser.id=== user.id&& <Button 
                pos="absolute" 
                mb="2" 
                top="6" 
                right="6" 
                colorScheme="teal"
                onClick={onOpen}
            >
                Change avatar
            </Button>}
            <Stack ml="10">
                <Text fontSize="2xl">@{user.username}</Text>
                <HStack spacing ="10">
                    <Text color="gray.700" fontsize={["sm","lg"]}>
                        Posts : {posts.length}
                    </Text>
                    <Text color="gray.700" fontsize={["sm","lg"]}>
                        joined: {format(user.date,`dd${","} MMMM YYY`)}
                    </Text>
                </HStack>
            </Stack>
            <EditProfile isOpen={isOpen} onClose={onClose} />
        </Flex>
        <Divider/>
        {postsLoading ? (<Text>Posts are loading...</Text>):(<PostsLists posts={posts}/>)}
    </Stack>
  )
}
