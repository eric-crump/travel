import './App.css';
import Embark from './components/Embark';
import Guides from './components/Guides';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Embark />
      <Guides />
    </div>
  );
}

export default App;
