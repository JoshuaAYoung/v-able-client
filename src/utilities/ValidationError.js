import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return <div className="validationError">{props.message}</div>;
  }
  return <></>;
}
