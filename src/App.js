
import './app.css';
import './fonts/fonts.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Vista from './components/Vista';
import About from './components/About';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
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
    <Work/>
    <Trainers/>
    <Pricing/>
    <Footer/>
    </>
  );
}

export default App;
