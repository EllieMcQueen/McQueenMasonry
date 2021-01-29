import './styles/main.scss';
import './styles/layout/App.scss';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
