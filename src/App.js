import { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Donate = lazy(() => import('./routes/Donate'));
const Contact = lazy(() => import('./routes/Contact'));

function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>} >
          <Switch>
            <Route exact path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/donate' Component={Donate} />
            <Route path='/contact' Component={Contact} />
          </Switch>
        </Suspense>
      <Home />
      </Router>
    </div>
  );
}

export default App;
