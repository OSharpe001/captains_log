import React from 'react';
const Default = require("./layout/Default");


module.exports = function Show({ log }) {

    console.log("*****CURRENT LOG'S INFO: ", log)

    const pageStyle = {
        color: '#dddddd',
        backgroundColor: '#888888',
        textAlign: "center",
        minHeight: "98vh",
    };

    const h1Style = {
        color: "black",
        padding: "15px",
        margin: "0 auto 20px",
        textDecoration: "underline",
    };

    const h2Style = {
        fontSize: "25pt",
        margin: "40px auto 20px",
        textDecoration: "underline",
    };

    const paragraphStyle = {
        fontSize: "16pt",
        margin: "40px auto 20px",
        textDecoration: "none",
    };

    const imageStyle = {
        margin: "20px auto",
        border: "10px ridge black",
        padding: "30px",
        backgroundColor: '#99bbff',
    };

    const buttonStyle = {
        display: "block",
        margin: "20px auto",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

    return (
        <Default bodyStyle={pageStyle} headerStyle={h1Style} title={`Captain's Log: EarthDate-${log.updatedAt.toLocaleString().split("G")[0]}`}>
            <h2 style={h2Style}>{log.title}</h2>
            <p style={paragraphStyle}>{log.entry}</p>
            {log.shipIsBroken ?
                <h3>Condition: Our ship was damaged...</h3>
            :
                <h3>Condition: Our ship remains in good condition...</h3>
            }
            <button style={buttonStyle}><a style={linkStyle} href="/logs">Back</a></button>
        </Default>
    )
}