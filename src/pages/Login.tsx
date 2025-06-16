import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Leaf } from "lucide-react";

// Datos de prueba para login/register
const FAKE_USERS = [
    {
        email: "diego@greengrassvalley.com",
        password: "123456",
        name: "Diego Dev",
    },
    {
        email: "josecalderon@greengrassvalley.com",
        password: "123456",
        name: "Jose Calderon",
    },
];

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      if (isRegister) {
        // Registro ficticio: guarda en localStorage
        localStorage.setItem(
          "hv_user",
          JSON.stringify({ name: form.name, email: form.email })
        );
        navigate("/dashboard");
      } else {
        // Login ficticio: compara con todos los datos de prueba
        const user = FAKE_USERS.find(
          (u) => u.email === form.email && u.password === form.password
        );
        if (user) {
          localStorage.setItem(
            "hv_user",
            JSON.stringify({ name: user.name, email: user.email })
          );
          navigate("/dashboard");
        } else {
          setError("Credenciales incorrectas");
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 pt-32">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6 border border-green-100"
        >
          <div className="flex flex-col items-center gap-2 mb-2">
            <Leaf className="h-10 w-10 text-green-600" />
            <h2 className="text-2xl font-bold font-poppins text-green-700">
              {isRegister ? "Crear cuenta" : "Iniciar sesión"}
            </h2>
            <p className="text-gray-500 font-inter text-sm">
              {isRegister
                ? "Regístrate para comenzar a monitorear tus sembrios"
                : "Accede a tu dashboard de GreenGrassValley"}
            </p>
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center font-inter">
              {error}
            </div>
          )}
          <input
            type="email"
            required
            placeholder="Correo electrónico"
            className="border border-green-200 rounded-lg px-4 py-2 font-inter focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.email}
            onChange={(e) =>
              setForm((f) => ({ ...f, email: e.target.value }))
            }
          />
          <input
            type="password"
            required
            placeholder="Contraseña"
            className="border border-green-200 rounded-lg px-4 py-2 font-inter focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.password}
            onChange={(e) =>
              setForm((f) => ({ ...f, password: e.target.value }))
            }
          />
          {isRegister && (
            <input
              type="text"
              required
              placeholder="Nombre completo"
              className="border border-green-200 rounded-lg px-4 py-2 font-inter focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
            />
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-green-500 to-lime-400 text-white font-bold py-2 rounded-lg font-poppins hover:scale-105 transition-all"
          >
            {loading
              ? "Cargando..."
              : isRegister
              ? "Crear cuenta"
              : "Iniciar sesión"}
          </button>
          <div className="text-center text-sm text-gray-600 font-inter">
            {isRegister ? (
              <>
                ¿Ya tienes cuenta?{" "}
                <button
                  type="button"
                  className="text-green-600 hover:underline"
                  onClick={() => setIsRegister(false)}
                >
                  Inicia sesión
                </button>
              </>
            ) : (
              <>
                ¿No tienes cuenta?{" "}
                <button
                  type="button"
                  className="text-green-600 hover:underline"
                  onClick={() => setIsRegister(true)}
                >
                  Regístrate
                </button>
              </>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
