import React from 'react'
import { Flex, Text, Center, Container } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Flex bg="black" h="200px">
      <Container maxW="container.xl">
        <Flex
          height="100%"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            PC Giveaways
          </Text>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Hero
