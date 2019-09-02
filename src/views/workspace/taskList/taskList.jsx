import React from "react";

let tasklistStyle = {
    position: "absolute",
    left: 260,
    right: "36%",
    height: "100%",
    backgroundColor: "#fff"
}

export default class TaskList extends React.Component {
    render() {
        return (
            <div className="tasklist" style={tasklistStyle}></div>
        )
    }
}