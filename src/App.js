import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './App.css'

//pages
import Dashboard from './pages/dashboard/Dashboard';
import Project from './pages/Project/Project';
import Create from './pages/Create/Create';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="container">
          <Navbar />
          <Switch>
            <Route exact path ="/">
              <Dashboard />
            </Route>
            <Route path ="/create">
              <Create />
            </Route>
            <Route path ="/project/:id">
              <Dashboard />
            </Route>
            <Route path ="/login">
              <Login />
            </Route>
            <Route path ="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App
