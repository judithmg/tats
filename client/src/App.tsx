import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/User/Login';
import Playground from './pages/playground';
import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import AddTattoo from './pages/AddTattoo';
import './styles/App.scss';

const App = (): JSX.Element => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/addtattoo" component={AddTattoo} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/playground" component={Playground} />
                    <Route path="/" />
                </Switch>
                <Navbar />
            </Router>
        </>
    );
};

export default App;
