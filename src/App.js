import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <article>
        <Home />
      </article>
      <Footer />
    </>
  );
}

export default App;
