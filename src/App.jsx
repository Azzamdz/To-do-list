import { useState, useEffect } from "react";
import Input from "./components/input";
import RadioGroup from "./components/radioGroup";
import Button from "./components/button";
import Card from "./components/card";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    title: "",
    desc: "",
    status: "To do",
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = form;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, form]);
    }
    setForm({ title: "", desc: "", status: "To do" });
  };

  const handleDelete = (i) => {
    if (confirm(" Yakin mau hapus task ini?")) {
      setTodos(todos.filter((_, idx) => idx !== i));
    }
  };

  const handleEdit = (i) => {
    setForm(todos[i]);
    setEditIndex(i);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-300 via-blue-900 to-purple-900 text-white">
      {/* HEADER */}
      <header className="bg-white/10 backdrop-blur-md shadow-lg py-4 sm:py-6 border-b border-white/20">
        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r via-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg px-4">
          To Do List App
        </h1>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 font-poppins">
        <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-10 sm:mb-12 border border-white/20 hover:shadow-2xl transition">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-semibold font-poppins">
            <Input
              label="Judul"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Masukan judul..."
            />
            <Input
              label="Deskripsi"
              name="desc"
              type="textarea"
              value={form.desc}
              onChange={handleChange}
              placeholder="Masukan deskripsi..."
            />
            <RadioGroup
              label="Status"
              name="status"
              options={["To do", "In Progress", "Done"]}
              value={form.status}
              onChange={handleChange}
            />
            <Button
              onClick={handleSubmit}
              className="w-full py-3 text-base sm:text-lg font-semibold rounded-xl 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500
              text-white shadow-lg hover:scale-105 hover:shadow-xl 
              transition-transform duration-300"
            >
              {editIndex !== null ? " Update Task" : " Save Task"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {todos.length === 0 ? (
            <p className="col-span-full text-center text-gray-300 italic text-sm sm:text-base"></p>
          ) : (
            todos.map((todo, i) => (
              <Card
                key={i}
                title={todo.title}
                desc={todo.desc}
                status={todo.status}
                onEdit={() => handleEdit(i)}
                onDelete={() => handleDelete(i)}
              />
            ))
          )}
        </div>
      </main>

      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-3 sm:py-4 text-center text-gray-300 text-xs sm:text-sm px-4">
        Azzamdzz © 2025
      </footer>
    </div>
  );
}

export default App;
