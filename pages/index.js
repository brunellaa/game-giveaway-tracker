import Head from 'next/head'
import Hero from '../components/hero'
import GameCard from '../components/gameCard'
import Footer from '../components/footer'
import { Container, Flex, SimpleGrid } from '@chakra-ui/react'

export async function getServerSideProps() {
  // fetch gamerpower api for giveaways
  const res = await fetch(
    `https://www.gamerpower.com/api/giveaways?platform=pc`
  )
  // responte to json
  const data = await res.json()
  // if there is no data return not found
  if (!data) {
    return {
      notFound: true,
    }
  }

  // filter out dlc and lootboxes
  const games = data.filter(items => {
    return items.type === 'Full Game'
  })

  // pass to component as props
  return {
    props: { games },
  }
}

export default function Home({ games }) {
  return (
    <div>
      <Head>
        <title>PC Giveaway tracker</title>
        <meta
          name="never miss another free pc game"
          content="PC game giveaway tracker"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Flex justifyContent="center">
        <Container maxW="container.xl" m="2rem 0">
          <SimpleGrid
            alignContent="center"
            // templateColumns={(['repeat(2, 1fr)'], ['repeat(4, 2fr)'])}
            minChildWidth="250px"
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
  )
}
