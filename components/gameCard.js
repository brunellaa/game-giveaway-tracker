import Image from 'next/image';
import { Heading, Text, Flex, Button, Badge, Box } from '@chakra-ui/react';
import { ExternalLink } from 'lucide-react';

const GameCard = ({
  title,
  description,
  open_giveaway_url,
  image,
  platforms,
}) => {
  return (
    <Flex
      borderRadius='lg'
      direction='column'
      w='100%'
      boxShadow='xl'
      bg='#2a0134'
      p={4}
      transition='transform 0.15s ease-in-out'
      _hover={{ transform: 'scale(1.03)', boxShadow: '2xl' }}
    >
      <a target='_blank' href={open_giveaway_url} rel='noreferrer'>
        <Box borderRadius='md' overflow='hidden'>
          <Image
            src={image}
            alt='Game Image'
            width={460}
            height={215}
          />
        </Box>
      </a>

      <Heading as='h3' size='md' my='1rem' lineClamp={2} color='#ff612f'>
        {title}
      </Heading>
      <Badge fontSize='0.8rem' p={2} borderRadius='md' bg='#471153' color='white'>
        {platforms}
      </Badge>
      <Text fontSize='sm' my='1rem' lineClamp={4} flexGrow='1' color='gray.300'>
        {description}
      </Text>

      <Button
        my='1rem'
        variant='solid'
        bg='#ff612f'
        color='white'
        _hover={{ bg: '#e25529' }}
        asChild
      >
        <a target='_blank' href={open_giveaway_url} rel='noreferrer'>
          Go to giveaway
          <ExternalLink size={16} style={{ marginLeft: '8px' }} />
        </a>
      </Button>
    </Flex>
  );
};

export default GameCard;
