import Head from 'next/head';
import Hero from '../components/hero';
import GameCard from '../components/gameCard';
import Footer from '../components/footer';
import { Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [games, setGames] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://www.gamerpower.com/api/giveaways?platform=pc')
      .then(res => res.json())
      .then(data => {
        setGames(
          data.filter(items => {
            return items.type === 'Game';
          })
        );
        setLoading(false);
      });
  }, []);

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
          <SimpleGrid
            alignContent='center'
            // templateColumns={(['repeat(2, 1fr)'], ['repeat(4, 2fr)'])}
            minChildWidth='250px'
            gap={6}
          >
            {games
              ? games.map(({ id, ...allProps }) => (
                  <GameCard {...allProps} key={id}></GameCard>
                ))
              : null}
          </SimpleGrid>
        </Container>
      </Flex>
      <Footer />
    </div>
  );
}
