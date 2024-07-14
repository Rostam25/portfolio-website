import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Career } from './components/Career';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Career />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
