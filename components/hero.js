import React from 'react';
import { Flex, Center, Container, Box, Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box position="relative" w="100%" h="400px" overflow="hidden">
      {/* GIF Background */}
      <Box
        as="img"
        src="/videogame.gif"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-2}
      />

      {/* Blur Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backdropFilter="blur(10px)"
        zIndex={-1}
      />

      {/* Hero Content */}
      <Flex bg="blackAlpha.500" h="400px" position="relative" zIndex={1}>
        <Container maxW="container.xl">
          <Flex
            height="100%"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/pc-giveaways-logo.png"
              alt="PC Giveaways Logo"
              maxH="300px"
              objectFit="contain"
            />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Hero;