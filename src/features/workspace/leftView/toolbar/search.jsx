import React from "react";

const searchStyle = {
    float: "right",
    marginLeft: 10,
    width: 24,
    height: 24,
    lineHeight: "24px",
    textAlign: "center"
}
class Search extends React.Component {

    render() {
        return(
            <div className="search" style={searchStyle}>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}

export default Search;