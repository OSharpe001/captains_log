import React from "react";
const Default = require("./layout/Default");

module.exports = function Index({ logs }) {

    const pageStyle = {
        backgroundColor: '#888888',
        textAlign: "center",
        minHeight: "98vh",
    };

    const h1Style = {
        color: "black",
        padding: "15px",
        margin: "0 auto 15px",
        textDecoration: "underline",
    };

    const listItemStyle = {
        listStyleType: "none",
        width: "fit-content",
    };

    const nameStyle = {
        margin: "0 0 0 30px",
        textAlign: "left",
    };

    const buttonStyle = {
        margin: "20px auto",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

    return (
        <Default bodyStyle={pageStyle} headerStyle={h1Style} title={"Captain's Logs"}>
            <nav>
                <button style={buttonStyle}><a style={linkStyle} href="/logs/new">Make A New Entry</a></button>
            </nav>
            <ul>
                {logs.map((log, index) => (
                    <li key={index} style={listItemStyle}>
                        <a href={`/logs/${log.id}`} style={nameStyle}><h2>{log.title}</h2></a>
                        <form  method ="POST" action={`/logs/${log.id}?_method=DELETE`}>
                            <input type="submit" value="DELETE" />
                        </form>
                        <a href={`/logs/${log.id}/edit`}>Edit This Log</a>
                    </li>
                ))}
            </ul>
        </Default>
    );
};