import './App.css';
import Header from './Components/header/Header'
import Navbar from './Components/navbar/Navbar'
import About from './Components/about/About'
import Experience from './Components/experince/Experience'
import Services from './Components/services/Services'
import Portfolio from './Components/portfilio/Portfolio'
import Testimonial from './Components/testimonials/Testimonial'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'


function App() {
  return (
    <>
    
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
