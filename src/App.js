import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import ProductsandServices from './Components/ProductandServices/ProductsandServices';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <About/>
     <Team/>
     <ProductsandServices/>
     <Contact/>
     <Footer/> 
    </div>
  );
}

export default App;
