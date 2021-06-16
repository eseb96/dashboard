import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout.js'
import '../pages/css/w3.css'


function MyApp({ Component, pageProps }) {
  return(
  <><Layout></Layout>
  <div class='container'>
  <Component {...pageProps} />
  </div>
  </>)
}

export default MyApp
