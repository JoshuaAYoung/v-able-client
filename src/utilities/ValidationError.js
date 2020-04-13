import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return <div className="validationError">&bull; {props.message}</div>;
  }
  return <></>;
}
