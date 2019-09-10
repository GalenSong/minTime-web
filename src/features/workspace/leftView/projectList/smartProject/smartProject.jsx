import React from 'react';
import {NavLink} from "react-router-dom";

class SmartProject extends React.Component {
    render() {
        return (
            <ul>
                <li class="list-item">
                    <NavLink to="/all/today" tag="li">
                        <span class="list-item-icon"><i className="fa fa-calendar"></i></span>
                        <span>今天</span>
                        <span>1</span>
                    </NavLink>
                </li>
                <li class="list-item">
                    <NavLink to="/all/week" tag="li">
                        <span class="list-item-icon"><i className="fa fa-calendar"></i></span>
                        <span>最近七天</span>
                        <span>2</span>
                    </NavLink>
                </li>
                <li class="list-item">
                    <NavLink to="/#c/all/calendar/m" tag="li">
                        <span class="list-item-icon"><i className="fa fa-calendar"></i></span>
                        <span>日历</span>
                    </NavLink> 
                </li>
                <li class="list-item">
                    <NavLink to="/#p/inbox/tasks" tag="li">
                        <span class="list-item-icon"><i className="fa fa-music"></i></span>
                        <span>收集箱</span>    
                    </NavLink>  
                </li>               
            </ul>    
        )
    }
}

export default SmartProject;