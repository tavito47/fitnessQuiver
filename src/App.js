
import Header from './components/Header';
import './app.css';
import Footer from './components/Footer';
import './fonts/fonts.css'
import Vista from './components/Vista';
import About from './components/About';

function App() {
  return (
    <>
    
   {/*  <p class="regular">Este texto usa MiFuenteRegular.</p>
    <p class="bold">Este texto usa MiFuenteRegular.</p>
    <p class="light">Este texto usa MiFuenteRegular.</p>
    <p class="medium">Este texto usa MiFuenteRegular.</p> */}
    <Header/>
    <Vista/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
