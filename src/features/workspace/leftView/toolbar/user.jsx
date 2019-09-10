import React from "react";

const userAvatarStyle = {

},
userNameStyle = {
    maxWidth: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "inline-block",
    margin: "0 0 0 8px",
    maxWidth: 100,
    cursor: "pointer"
};

export default class User extends React.Component {

    render() {
        return(
            <div className="user" style={{position: "relative", float: "left"}}>
                <div class="user-avatar"></div>
                <span class="user-name" style={userNameStyle}>秦岭以北</span>    
            </div>
        )
    }
}