import '../styles/globals.css'
import Layout from '../components/Layout'

function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

function MyApp({ Component, pageProps }) {
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
