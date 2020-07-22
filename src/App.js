import React from 'react';
import { HomeDefault, Login, Signup, Forget } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './style/main.scss';
import {UserContextProvider} from './providers/provider';

const App = () => {
    return (
        <UserContextProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/forget">
                        <Forget />
                    </Route>
                </Switch>
            </Router>
        </UserContextProvider>
    )
}

export default App;