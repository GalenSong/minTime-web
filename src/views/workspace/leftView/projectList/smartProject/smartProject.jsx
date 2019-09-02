import React from 'react';
import {NavLink} from "react-router-dom";

class SmartProject extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink to="/all/today" tag="li">
                        <span><i className="fa fa-calendar"></i></span>
                        <span>今天</span>
                        <span>1</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/#q/all/week" tag="li">
                        <span><i></i></span>
                        <span>最近七天</span>
                        <span>2</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/#c/all/calendar/m" tag="li">
                        <span><i className="fa fa-calendar"></i></span>
                        <span>日历</span>
                    </NavLink> 
                </li>
                <li>
                    <NavLink to="/#p/inbox/tasks" tag="li">
                        <span><i className="fa fa-music"></i></span>
                        <span>收集箱</span>    
                    </NavLink>  
                </li>               
            </ul>    
        )
    }
}

export default SmartProject;