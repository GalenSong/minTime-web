import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "../views/login/login";
import SignUp from "../views/signup/signup";
import Workspace from "../views/workspace/workspace";

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

