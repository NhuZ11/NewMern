import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.text}</strong> 
        {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Alert;
