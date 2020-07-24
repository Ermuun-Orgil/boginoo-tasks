import React from 'react';
import { HomeDefault, Login, Signup, Forget, Pass } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './style/main.scss';
import {UserContextProvider} from './providers/userProvider';

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
                    <Route path="*">
                        <Pass />
                    </Route>
                </Switch>
            </Router>
        </UserContextProvider>
    )
}

export default App;