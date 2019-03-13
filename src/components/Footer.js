import React from 'react';

export default function Footer() {
    return(
        <div style={divStyle}>
            <a style={linkStyle} href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>
    )
}

const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    backgroundColor: "grey"
}

const linkStyle = {
    fontStyle: "italic",
    color: "whitesmoke",
}