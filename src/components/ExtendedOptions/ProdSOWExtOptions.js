import React from "react";

const ProdSOWExtOptions = ({
  title,
  name,
  type,
  onExtendedAreaChange,
  value,
  placeholder
}) => {
  console.log(title, onExtendedAreaChange, value, placeholder);

  return (
    <div className="form-group">
      {/* <p>This is the ProdSOWExtOptions Component</p> */}
      <label className="form-label">{title}</label>
      <textarea
        className="form-control"
        type={type}
        /* rows={rows} */
        /* style={resize ? null : { resize: "none" }} */
        name={name}
        value={value}
        onChange={onExtendedAreaChange}
        placeholder={placeholder}
      />
    </div>
  );
};

{
  /* <tr onClick={() => this.props.store.changeData(row.original)}></tr> */
}

export default ProdSOWExtOptions;
