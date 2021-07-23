import React from 'react'
import { Flex, Text, Link } from '@chakra-ui/layout'

const Footer = () => {
  return (
    <Flex justifyContent="center" p={4}>
      <Text>
        powered by{' '}
        <Link target="_blank" href="https://www.gamerpower.com/api-read">
          GamerPower API
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
