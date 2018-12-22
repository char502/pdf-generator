import React from "react";

const ProdSOWExtOptions = props => {
  // console.log(props);
  return (
    <div className="form-group">
      {/* <p>This is the ProdSOWExtOptions Component</p> */}
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        /* rows={rows} */
        /* style={resize ? null : { resize: "none" }} */
        /* name={name} */
        value={props.value}
        onChange={props.onExtendedAreaChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default ProdSOWExtOptions;
