import React from 'react';

const Alert = ({handleClick, type, children}) => {
    return (
      <div className={`alert alert-${type}`}>
        <span className="content">          
          {children}     
        </span>
        <button onClick={handleClick} className="close-button">x</button>
      </div>
    );
  }

export default Alert;