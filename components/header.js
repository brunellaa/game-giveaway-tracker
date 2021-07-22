import { Flex } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex as="header" p={2} justify="space-between">
      <div>logo</div>
      <div>menu</div>
    </Flex>
  )
}

export default Header
