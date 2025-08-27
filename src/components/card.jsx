import Button from "./button";

export default function Card({ title, desc, status, onEdit, onDelete }) {
  const statusColor = {
    "To do": "bg-gray-100 text-gray-700 border-gray-300",
    "In Progress": "bg-yellow-100 text-yellow-800 border-yellow-400",
    Done: "bg-green-100 text-green-800 border-green-400",
  };

  return (
    <div
      className="relative group overflow-hidden rounded-2xl 
      border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg
      p-6 flex flex-col justify-between min-h-[260px] max-w-sm w-full mx-auto
      transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>

      <div className="flex justify-between items-start gap-3 relative z-10">
        <div className="flex-1">
          <h3 className="font-extrabold text-2xl text-white drop-shadow-sm">
            {title}
          </h3>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">{desc}</p>
        </div>
        <span
          className={`px-3 py-1 text-xs font-bold rounded-full border shadow-sm whitespace-nowrap
            ${
              statusColor[status] || "bg-gray-100 text-gray-700 border-gray-300"
            }`}
        >
          {status}
        </span>
      </div>

      <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

      <div className="flex justify-end gap-3 relative z-10">
        <Button
          variant="secondary"
          onClick={onEdit}
          className="hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition"
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={onDelete}
          className="hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition"
        >
          Hapus
        </Button>
      </div>
    </div>
  );
}
