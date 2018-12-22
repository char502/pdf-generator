import React from "react";

const ProdSOWExtOptions = ({
  title,
  onExtendedAreaChange,
  value,
  placeholder
}) => {
  // console.log(props);

  return (
    <div className="form-group">
      {/* <p>This is the ProdSOWExtOptions Component</p> */}
      <label className="form-label">{title}</label>
      <textarea
        className="form-control"
        /* rows={rows} */
        /* style={resize ? null : { resize: "none" }} */
        /* name={name} */
        value={value}
        onChange={onExtendedAreaChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProdSOWExtOptions;

{
  /* <tr onClick={() => this.props.store.changeData(row.original)}></tr> */
}
