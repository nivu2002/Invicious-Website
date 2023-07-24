import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <About/>
     <Team/>
    </div>
  );
}

export default App;
