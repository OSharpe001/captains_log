import React from 'react';
import Default from "./layout/Default";


module.exports = function Home() {

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

    const buttonStyle = {
        margin: "20px auto",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

  return (
    <Default bodyStyle={pageStyle} headerStyle={h1Style} title={"Welcome to the Captain's Logs!"}>
        <button style={buttonStyle}><a style={linkStyle} href="logs">Go To Logs</a></button>
    </Default>
  );
};
