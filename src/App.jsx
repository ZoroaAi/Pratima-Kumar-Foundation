import { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/sub-components/Navigation';

import './App.scss';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/AboutUs'));
const Donate = lazy(() => import('./components/Donate'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>} >
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/donate' Component={Donate} />
            <Route path='/contact' Component={Contact} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
