import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
