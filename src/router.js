import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "./config/history";
// views

import Post from "./views/Post";
import Networking from "./views/Networking";
import Panel from "./views/Panel";
import Profile from "./views/Profile";

import SignIn from "./views/Sign/SignIn";

import Error404 from "./views/Error/404";
import { isAuthenticated } from "./config/auth";

const AdminRoute = ({ ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/signin" />;
  }
  return <Route {...rest} />;
};

const Routers = () => (
  <Router history={history}>
    <Switch>
      <AdminRoute exact path="/" component={Post} />
      <AdminRoute exact path="/minharede" component={Networking} />
      <AdminRoute exact path="/painel" component={Panel} />
      <AdminRoute exact path="/perfil" component={Profile} />
      <AdminRoute exact path="/perfil" component={Profile} />

      {/* --------------Sign --------------*/}
      <Route exact path="/signin" component={SignIn} />

      {/* --------------ERROR --------------*/}
      <Route path="*" component={Error404} />
    </Switch>
  </Router>
);

export default Routers;
