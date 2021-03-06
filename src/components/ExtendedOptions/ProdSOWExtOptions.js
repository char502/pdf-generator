import React from "react";

const ProdSOWExtOptions = props => {
  // console.log(props);
  return (
    <div className="form-group">
      {/* <p>This is the ProdSOWExtOptions Component</p> */}
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        type={props.type}
        rows={props.rows}
        style={props.resize ? null : { resize: "none" }}
        name={props.name}
        value={props.value}
        onChange={props.handleExtText}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default ProdSOWExtOptions;
