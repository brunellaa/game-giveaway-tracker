import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      p={4}
      bg="#100016" // Darker purple than the page background
      color="white"
      position="sticky"
      bottom={0}
      width="100%"
    >
      <Text>
        Made by{' '}
        <Link href="https://www.alejandrobrunella.com/" color="#ff612f" isExternal>
          Alejandro Brunella{" "}
        </Link>
        using API by{' '}
        <Link target="_blank" href="https://www.gamerpower.com/api-read" color="orange.300">
          GamerPower API
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;