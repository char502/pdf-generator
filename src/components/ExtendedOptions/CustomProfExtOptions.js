import React from "react";

const CustomProfExtOptions = props => {
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
        onChange={props.handleCustProf}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CustomProfExtOptions;

// const CustomProfExtOptions = props => {
//   return (
//     <div>
//       <p>This is the CustomProfExtOptions Component</p>
//     </div>
//   );
// };

// export default CustomProfExtOptions;
