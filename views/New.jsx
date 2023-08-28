import React from 'react';
const Default = require("./layout/Default");


module.exports = function New() {

    const pageStyle = {
        backgroundColor: '#888888',
        textAlign: "center",
        minHeight: "98vh",
    };

    const h1Style = {
        color: "black",
        margin: "0 auto 15px",
        padding: "15px",
        textDecoration: "underline",
    };

    const labelStyle = {
        fontSize: "20pt",
        margin: "40px auto 20px",
        display: "block",
    };

    const inputStyle = {
        width: "32ch",
        fontSize: "12pt",
        textAlign: "center",
    };

    const textAreaStyle = {
        width: "32ch",
        height: "10ch",
        fontSize: "12pt",
        textAlign: "left",
    };

    const checkBoxStyle = {
        display: "block",
        margin: "auto",
    };

    const buttonStyle = {
        margin: "20px auto",
    };

    const submitButtonStyle = {
        margin: "7vh auto",
        fontSize: "12pt",
        cursor: "pointer",
        display: "block",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

  return (
    <Default  bodyStyle={pageStyle} headerStyle={h1Style} title={"New Captain's Log"}>
        <form action="/logs" method="POST">
            <label style={labelStyle} htmlFor="title">Title: </label>
            <input style={inputStyle} name="title" type="text" placeholder="Log Title"/>

            <label style={labelStyle} htmlFor="entry">Entry: </label>
            <input style={textAreaStyle} name="entry" type="textarea" placeholder="Place your entry, here."/>

            <label style={labelStyle} htmlFor="shipIsBroken">Is The Ship Damaged? </label>
            <input style={checkBoxStyle} name="shipIsBroken" type="checkbox" />

            <input style={submitButtonStyle} type="submit" value="Create Your Log"/>

            <button style={buttonStyle}><a style={linkStyle} href="/logs">Cancel</a></button>
        </form>
    </Default>
  );
};
