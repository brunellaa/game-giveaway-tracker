import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/footer';
import GameCard from '../components/gameCard';
import Hero from '../components/hero';

export default function Home({ games }) {
  return (
    <div>
      <Head>
        <title>PC Giveaway tracker</title>
        <meta
          name='never miss another free pc game'
          content='PC game giveaway tracker'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
      <Flex justifyContent='center'>
        <Container maxW='container.xl' m='2rem 0'>
          <SimpleGrid alignContent='center' minChildWidth='250px' gap={6}>
            {games &&
              games.map(({ id, ...allProps }) => (
                <GameCard {...allProps} key={id}></GameCard>
              ))}
          </SimpleGrid>
        </Container>
      </Flex>
      <Footer />
    </div>
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

    console.log("API Response:", data);

    if (!Array.isArray(data)) {
      console.error("Unexpected API response format", data);
      return {
        props: { games: [] },
      };
    }

    const games = data.filter(item => item.type === 'Game');

    return {
      props: { games },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { games: [] },
    };
  }
}
