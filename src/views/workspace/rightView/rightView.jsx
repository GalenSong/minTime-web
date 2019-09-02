import React from "react";

let rightViewStyle = {
    left: 0,
    position: "absolute",
    width: "260px",
    height: "100%",
    backgroundColor: "#667fdd",
    color: "#fff"
}

function RightView() {
    return(
        <div className="rightview" style={rightViewStyle}></div>
    )
}

export default RightView;