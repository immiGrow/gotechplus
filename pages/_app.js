import '../styles/globals.css'
import Gotta from '../context/Gotta'
function MyApp({ Component, pageProps }) {
  return <Gotta>
  <Component {...pageProps} />
  </Gotta>
}

export default MyApp
