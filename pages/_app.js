import '../styles/globals.css'
import { GlobalProvider } from './../app/service/GlobalState';

function MyApp({ Component, pageProps }) {
  return <GlobalProvider><Component {...pageProps} /></GlobalProvider>
}


export default MyApp
