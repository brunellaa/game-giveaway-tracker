import React from 'react'
import { Flex, Text, Center, Container } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Flex bg="black" h="400px">
      <Container maxW="container.xl">
        <Center h="100%">
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            PC Game giveaway tracker
          </Text>
        </Center>
      </Container>
    </Flex>
  )
}

export default Hero
