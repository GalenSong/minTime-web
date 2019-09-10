import React from "react";
import ToolBar from "./toolbar/toolbar";
import ProjectList from "./projectList/projectList";

let leftViewStyle = {
    position: "absolute",
    left: 0,
    "zIndex": 10,
    width: "260px",
    height: "100%",
    backgroundColor: "#667fdd",
    color: "#fff"
}

function LeftView() {
    return(
        <div className="leftview" style={leftViewStyle}>
            <ToolBar />
            <ProjectList />
        </div>
    )
}

export default LeftView;