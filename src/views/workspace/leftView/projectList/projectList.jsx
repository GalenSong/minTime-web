import React from "react";
import SmartProject from "./smartProject/smartProject";
import Project from "./project/project";

class ProjectList extends React.Component {

    render() {
        return(
            <div className="projectList" style={{padding: "80px 20px 0"}}>
                <SmartProject />
                <Project />
            </div>
        )
    }
}

export default ProjectList;