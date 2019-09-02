import React from "react";
import User from "./user";
import Notify from "./notify";
import Search from "./search";

let toolBarStyle = {
    position: "absolute",
    padding: "20px 18px",
    width: "100%",
    boxSizing: "border-box"
}

class ToolBar extends React.Component {
    render() {
        return (
            <div className="toolbar" style={toolBarStyle}>
                <User />
                <Notify />
                <Search />
            </div>
        ) 
    }
}

export default ToolBar;