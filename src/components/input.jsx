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
    <div className="w-full mb-4">
      <h3 className="mb-2 font-semibold text-lg">{label}</h3>
      <input
        className="w-full border rounded-xl p-4 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
