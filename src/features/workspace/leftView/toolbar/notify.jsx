import React from "react";
import getData from "./api/getData"

const notifyStyle = {
    float: "right",
    marginLeft: 10,
    width: 24,
    height: 24,
    lineHeight: "24px",
    textAlign: "center"
}
class Notify extends React.Component {

    componentDidMount() {
        getData().then((value) => {
            localStorage.publicKey = value.data.key;
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <div className="notify" style={notifyStyle}>
                <i className="fa fa-bell"></i>
            </div>
        )
    }
}

export default Notify;