import Image from 'next/image'
import { Heading, Text, Flex, Button, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const GameCard = ({
  title,
  description,
  open_giveaway_url,
  image,
  platform,
}) => {
  return (
    <Flex
      m="1rem"
      bg="gray.900"
      borderColor="gray.500"
      borderRadius="5px"
      direction="column"
      w="100%"
      boxShadow="base"
    >
      <Image
        src={image}
        alt="Picture of the author"
        width={460}
        height={215}
      ></Image>

      <Heading as="h3" size="md" m="1rem">
        {title}
      </Heading>
      <Text fontSize="sm" m="1rem" noOfLines={4}>
        {description}
      </Text>
      <Text fontSize="0.8rem" m="1rem" flexGrow="1">
        {platform}
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
