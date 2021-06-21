import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Content from './components/Content';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {

  React.useEffect(() => {
    document.title = "Meteoroloska stanica";
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route path="/forecast">
            <Content />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
