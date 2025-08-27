export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="mb-4">
      {label && <p className="mb-2 font-semibold text-gray-800">{label}</p>}
      <div className="flex gap-4 flex-wrap">
        {options.map((opt, i) => {
          const isActive = value === opt;
          return (
            <label
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all
                ${
                  isActive
                    ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm"
                    : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                }`}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={isActive}
                onChange={onChange}
                className="hidden"
              />
              <span
                className={`h-4 w-4 rounded-full border flex items-center justify-center
                  ${
                    isActive
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-400 bg-white"
                  }`}
              >
                {isActive && <span className="h-2 w-2 bg-white rounded-full" />}
              </span>
              <span className="font-medium">{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
