import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import Signup from './Components/Signup';
import Support from './Components/Support';
import Hero from './Hero';




function App() {
  return (
    <div className="App">
      <Navbar/>


      
      <Hero/> 
      <About/>
      <Support/>
      <Pricing/>
      <Signup/>
      <Footer/>
      

    
    </div>
  );
}

export default App;
