import { Container, Flex, SimpleGrid, Box, Text, Link } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/footer';
import GameCard from '../components/gameCard';
import Hero from '../components/hero';

export default function Home({ games }) {
  return (
    <Flex direction="column" minHeight="100vh" color="white">
      <Head>
        <title>PC Giveaway Tracker</title>
        <meta
          name='description'
          content='Never miss another free PC game - PC game giveaway tracker'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      {/* Info Section */}
      <Box bg="#1a001f" flex={1}>
        <Box textAlign="center" py={8} px={4} maxW="container.md" mx="auto">
          <Text fontSize="2xl" fontWeight="bold" color="#ff612f" mb={2}>
            Never Miss Another Free Game!
          </Text>
          <Text fontSize="lg" color="gray.300">
            This app was created to ensure you always stay ahead of the latest giveaways.
            No more missing out—track and claim free PC games with ease!
          </Text>
        </Box>

        {/* Content Section Fills Remaining Space */}
        <Flex flex="1" justifyContent='center'>
          <Container maxW='container.xl' m='2rem 0' flex="1">
            <SimpleGrid alignContent='center' minChildWidth='250px' gap={6}>
              {games &&
                games.map(({ id, ...allProps }) => (
                  <GameCard {...allProps} key={id}></GameCard>
                ))}
            </SimpleGrid>
          </Container>
        </Flex>
      </Box>

      <Footer />
    </Flex>
  );
}

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.GAMERPOWER_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  try {
    const res = await fetch(
      'https://gamerpower.p.rapidapi.com/api/filter?platform=epic-games-store.steam.android&type=game.loot',
      options
    );

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error('Unexpected API response format', data);
      return {
        props: { games: [] },
      };
    }

    const games = data.filter(item => item.type === 'Game');

    return {
      props: { games },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { games: [] },
    };
  }
}