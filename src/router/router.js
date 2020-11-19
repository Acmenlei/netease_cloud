import { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../views/Home/Home";
import PayListDetail from "../views/PayListDetail/detail";
import Header from "../components/Header/header";
import Player from "../components/Player/Player";

class RouterConfig extends Component {
  render() {
    return (
      <div id="routerConfig">
      <Header/>
          <Switch>
            <Route path="/index" exact component={Home} />
            <Route path="/paylistdetail" exact component={PayListDetail} />
            <Route path="/" exact>
              <Redirect to="/index" />
            </Route>
          </Switch>
          <Player/>
      </div>
    );
  }
}

export default RouterConfig;
