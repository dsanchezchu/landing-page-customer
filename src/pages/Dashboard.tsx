import { useEffect, useState } from "react";
import { Droplet, Thermometer, Leaf, User, Mail, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Navbar } from "@/components/Navbar";

const mockFetchDashboard = () =>
  Promise.resolve({
    products: [
      { name: "Lechuga", status: "Saludable", icon: Leaf, humidity: 68, temperature: 22 },
      { name: "Tomate", status: "En crecimiento", icon: Leaf, humidity: 72, temperature: 24 },
      { name: "Espinaca", status: "Saludable", icon: Leaf, humidity: 65, temperature: 21 },
    ],
    history: {
      humidity: [65, 67, 68, 70, 72, 71, 69],
      temperature: [21, 22, 22, 23, 24, 23, 22],
      labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    },
  });

export default function Dashboard() {
  const [data, setData] = useState<{products:any[], history:any}>({products:[], history:{humidity:[], temperature:[], labels:[]}});
  const [user, setUser] = useState<{name: string, email: string} | null>(null);

  useEffect(() => {
    mockFetchDashboard().then(setData);
    // Obtener usuario de prueba de localStorage
    const u = localStorage.getItem("hv_user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const avg = (arr: number[]) => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : "0";

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("hv_user");
    setUser(null);
    // Redirigir al login si existe ruta, si no, recargar
    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r border-green-100 shadow-lg pt-32 px-6 gap-8">
        <div className="flex flex-col items-center gap-2">
          <User className="h-10 w-10 text-green-600" />
          <span className="font-bold text-green-700 font-poppins text-lg">{user?.name || "Usuario"}</span>
          <span className="text-xs text-gray-500 font-inter flex items-center gap-1">
            <Mail className="h-4 w-4" /> {user?.email || "correo@ejemplo.com"}
          </span>
          {/* Botón de cerrar sesión */}
            <button
            onClick={() => {
              handleLogout();
              window.location.replace("/login");
            }}
            className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition text-xs font-semibold"
            >
            <LogOut className="h-4 w-4" /> Cerrar sesión
            </button>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins text-base">¡Bienvenido!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 font-inter">
                Aquí puedes monitorear el estado de tus plantas y ver tus datos personales.
              </p>
            </CardContent>
          </Card>
        </div>
      </aside>
      {/* Main Dashboard */}
      <div className="flex-1">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-10 pt-32">
          <h2 className="text-2xl font-bold font-poppins text-green-700 mb-8">
            Hola, {user?.name || "Usuario"} 👋
          </h2>
          {/* Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg"><Leaf className="h-7 w-7 text-green-600" /></div>
                <CardTitle className="font-poppins">Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{data.products.length}</div>
                <div className="text-sm text-gray-500">Plantas monitoreadas</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg"><Droplet className="h-7 w-7 text-blue-500" /></div>
                <CardTitle className="font-poppins">Humedad Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{avg(data.products.map(p => p.humidity))}%</div>
                <div className="text-sm text-gray-500">Última medición</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-red-100 rounded-lg"><Thermometer className="h-7 w-7 text-red-400" /></div>
                <CardTitle className="font-poppins">Temperatura Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{avg(data.products.map(p => p.temperature))}°C</div>
                <div className="text-sm text-gray-500">Última medición</div>
              </CardContent>
            </Card>
          </div>
          {/* Gráficos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins">Histórico de Humedad</CardTitle>
              </CardHeader>
              <CardContent>
                <Line
                  data={{
                    labels: data.history.labels,
                    datasets: [
                      {
                        label: "Humedad (%)",
                        data: data.history.humidity,
                        borderColor: "#22d3ee",
                        backgroundColor: "rgba(34,211,238,0.2)",
                        tension: 0.4,
                      },
                    ],
                  }}
                  options={{
                    plugins: { legend: { display: false } },
                    scales: { y: { min: 0, max: 100 } },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                  height={180}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins">Histórico de Temperatura</CardTitle>
              </CardHeader>
              <CardContent>
                <Line
                  data={{
                    labels: data.history.labels,
                    datasets: [
                      {
                        label: "Temperatura (°C)",
                        data: data.history.temperature,
                        borderColor: "#f87171",
                        backgroundColor: "rgba(248,113,113,0.2)",
                        tension: 0.4,
                      },
                    ],
                  }}
                  options={{
                    plugins: { legend: { display: false } },
                    scales: { y: { min: 0, max: 40 } },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                  height={180}
                />
              </CardContent>
            </Card>
          </div>
          {/* Tabla de productos */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-lg mb-4 font-poppins">Estado de las plantas</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm font-inter">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-2">Planta</th>
                    <th className="py-2">Humedad</th>
                    <th className="py-2">Temperatura</th>
                    <th className="py-2">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {data.products.map((p, i) => (
                    <tr key={i} className="border-b hover:bg-green-50">
                      <td className="py-2 flex items-center gap-2"><p.icon className="h-5 w-5 text-green-600" /> {p.name}</td>
                      <td className="py-2">{p.humidity}%</td>
                      <td className="py-2">{p.temperature}°C</td>
                      <td className="py-2">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
