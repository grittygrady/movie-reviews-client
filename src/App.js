import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddReview from './components/AddReview';
import ReviewDetails from './components/ReviewDetails';
import Landing from './components/Landing';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = '/'>
              <Landing />
            </Route>
            <Route path = '/allreviews'>
              <Home />
            </Route>
            <Route path = '/addreview'>
              <AddReview />
            </Route>
            <Route path = '/reviews/:id'>
              <ReviewDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
