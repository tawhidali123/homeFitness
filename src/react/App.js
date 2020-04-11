import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { storeConfig } from "../redux/store";

const store = storeConfig();

let storeSubscribe = store.subscribe(() => {
  console.log("sate changed => new state => ", store.getState());
});

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <main className="App">Home Fitness</main>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
