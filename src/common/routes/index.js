import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "../../features/login/login";
import Register from "../../features/register/register";
import Workspace from "../../features/workspace/workspace";

class RouteView extends React.Component{

    render() {
        return (
            <Router>
                <Route path="/" exact component={Workspace} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Router>
        )
    }
}

export default RouteView

