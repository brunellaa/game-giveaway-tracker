import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      p={4}
      bg="#100016"
      color="white"
      position="sticky"
      bottom={0}
      width="100%"
    >
      <Text>
        Made by{' '}
        <Link href="https://www.alejandrobrunella.com/" color="#ff612f" target="_blank" rel="noopener noreferrer">
          Alejandro Brunella{" "}
        </Link>
        using API by{' '}
        <Link target="_blank" rel="noopener noreferrer" href="https://www.gamerpower.com/api-read" color="orange.300">
          GamerPower API
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
