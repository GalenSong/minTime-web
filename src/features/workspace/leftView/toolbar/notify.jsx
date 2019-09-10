import React from "react";

const notifyStyle = {
    float: "right",
    marginLeft: 10,
    width: 24,
    height: 24,
    lineHeight: "24px",
    textAlign: "center"
}
class Notify extends React.Component {

    render() {
        return(
            <div className="notify" style={notifyStyle}>
                <i className="fa fa-bell"></i>
            </div>
        )
    }
}

export default Notify;