import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/home/index"
class App extends React.Component {

  render() {
    // console.log = console.warn = console.error = function () { }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
