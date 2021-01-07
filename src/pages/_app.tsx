import { AppProps } from 'next/app';
import 'styles/base/_base.scss';
import Head from 'next/head';
import 'styles/framework/_helpers.scss';
import 'styles/bootstrap.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
    <script src="https://kit.fontawesome.com/273e60ab22.js" crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans&family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    </Head>
    <Component {...pageProps} />

  </>

);

export default App;
