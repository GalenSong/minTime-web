import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "../../features/login/login";
import SignUp from "../../features/signup/signup";
import Workspace from "../../features/workspace/workspace";

class RouteView extends React.Component{

    render() {
        return (
            <Router>
                <Route path="/" exact component={Workspace} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Router>
        )
    }
}

export default RouteView

