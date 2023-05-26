import '../styles/globals.css'
import '../styles/normalize.css'
import { AppProvider } from "../context/AppProvider"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rodrigo Olivares - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </Head>
      <AppProvider>
        <Component {...pageProps}/>
      </AppProvider>
    </>
  )
}
