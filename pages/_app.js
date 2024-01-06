import '@/styles/globals.css'
import Header from '@/components/header'
import GlobalState from '@/context'

export default function App({ Component, pageProps }) {
  return <GlobalState>
  <Header/>
   <Component {...pageProps} />
  </GlobalState>
}
