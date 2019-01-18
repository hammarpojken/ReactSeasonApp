import React from "react";

const Spinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.content}</div>
    </div>
  );
};
Spinner.defaultProps = {
  content: "Loading.."
};
export default Spinner;
