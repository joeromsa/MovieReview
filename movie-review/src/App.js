import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initializeMovies } from './reducers/movieReducer'
import { useDispatch } from 'react-redux';

import Movies from './components/Movies';
import Menu from './components/Menu';
import AddMovie from './components/AddMovie';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeMovies());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route path="/add">
            <AddMovie />
          </Route>
          <Route path="/">
            <Movies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
