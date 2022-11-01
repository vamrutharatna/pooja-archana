import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import AllStories from './components/pages/AllStories';
import AllFestivas from './components/pages/AllFestivals';
import AllTemples from './components/pages/AllTemples';
import Write from './components/pages/Write';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AllStories' component={AllStories} />
          <Route path='/AllFestivals' component={AllFestivas} />
          <Route path='/AllTemples' component={AllTemples} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/Write' component={Write} />
          <Route path='/Products' component={Products} />
          
          </Switch>
      </Router>
    </>
  );
}

export default App;
