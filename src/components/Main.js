import React from 'react';

export default function Main() {
        return(
            <div style={outerDivStyle}>
                <div style={innerDivStyle}>
                    <h1>Main</h1>
                </div>
            </div>
        )
    }

const outerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
}

const innerDivStyle = {
    height: "80%",
    width: "80%",
    borderRadius: "10px",
    backgroundColor: "#ddf2ff"
}