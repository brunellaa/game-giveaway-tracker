import Image from 'next/image'
import { Heading, Text, Flex, Button, Badge, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const GameCard = ({
  title,
  description,
  open_giveaway_url,
  image,
  platforms,
}) => {
  return (
    <Flex
      border="1px"
      borderColor="gray.700"
      borderRadius="lg"
      direction="column"
      w="100%"
      boxShadow="base"
    >
      <a target="_blank" href={open_giveaway_url} rel="noreferrer">
        <Box borderRadius="lg" overflow="hidden">
          <Image
            borderRadius="full"
            src={image}
            alt="Picture of the author"
            width={460}
            height={215}
          ></Image>
        </Box>
      </a>

      <Heading as="h3" size="md" m="1rem" noOfLines={1}>
        {title}
      </Heading>
      <Badge fontSize="0.8rem" mx={4}>
        {platforms}
      </Badge>
      <Text fontSize="sm" m="1rem" noOfLines={4} flexGrow="1">
        {description}
      </Text>

      <Button m="1rem" rightIcon={<ExternalLinkIcon />} variant="outline">
        <a target="_blank" href={open_giveaway_url} rel="noreferrer">
          Go to giveaway
        </a>
      </Button>
    </Flex>
  )
}

export default GameCard
