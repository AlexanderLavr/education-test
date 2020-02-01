import React  from 'react';
import configStore from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/home/home';
import Result from './components/result/result';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={ Home } />
        <Route path='/result' component={ Result } />
      </Router>
    </Provider>
  );
}

export default App;
