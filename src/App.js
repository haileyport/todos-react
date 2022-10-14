import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <article>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </article>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
