function Input({
  text,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <>
      <h3>{label}</h3>
      <input
        className="border  rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
