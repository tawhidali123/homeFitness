import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { storeConfig } from "../redux/store";

// import layouts;
import HomePage from "./layouts/home";

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
            <Route path="/" exact component={HomePage}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
