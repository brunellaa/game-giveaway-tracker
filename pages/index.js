import Head from 'next/head'
import Hero from '../components/hero'
import GameCard from '../components/gameCard'
import { Container, Flex, Grid } from '@chakra-ui/react'

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.gamerpower.com/api/giveaways?platform=pc`
  )
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({ data }) {
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
          <Grid alignContent="center" templateColumns="repeat(4, 2fr)" gap={6}>
            {data
              ? data.map(({ id, ...allProps }) => (
                  <GameCard {...allProps} key={id}></GameCard>
                ))
              : null}
          </Grid>
        </Container>
      </Flex>
      <footer>footer</footer>
    </div>
  )
}
