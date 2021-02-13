import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "./../components/Header";
import About from "./../components/About";
import Dashboard from "./../components/Dashboard";
import NotFoundPage from "./../components/NotFoundPage";
import NavBar from "./../components/NavBar";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export { AppRouter as default };
