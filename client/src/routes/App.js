import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login.js'

const App = () => {

  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addclass" component={AddClass} />
            <Route exact path="/profile" component={Timer} /> */}
        </Switch>
    </Router>
  );
}

export default App;
