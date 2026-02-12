import { ChakraProvider } from '@chakra-ui/react'
import system from '../utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
