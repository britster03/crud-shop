import '@/styles/globals.css'
import Header from '@/components/Header'
import GlobalState from '@/context'

export default function App({ Component, pageProps }) {
  return <GlobalState>
  <Header/>
   <Component {...pageProps} />
  </GlobalState>
}
