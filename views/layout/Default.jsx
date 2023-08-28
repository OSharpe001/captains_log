import React from 'react';

module.exports = function Default({ title, children, bodyStyle, headerStyle }) {
  return (
    <div>
      <html>
        <head><title>{title}</title></head>
        <body style={bodyStyle}>
        <h1 style={headerStyle}>{title}</h1>
        {children}
        </body>
      </html>
    </div>
  );
};