export const Input = ({
  className,
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`input ${className}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
