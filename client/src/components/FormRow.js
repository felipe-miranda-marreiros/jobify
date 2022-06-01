const FormRow = ({ type, name, value, handlerChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handlerChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
