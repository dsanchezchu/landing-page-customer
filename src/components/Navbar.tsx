import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "¿Problema?", href: "/problema" },
    { name: "Solución", href: "/solucion" },
    { name: "Características", href: "/caracteristicas" },
    { name: "Iniciar sesión", href: "/login" },
];

export const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-white/80 backdrop-blur-lg border-b border-green-200 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Leaf className="h-8 w-8 md:h-10 md:w-10 text-green-600 drop-shadow-lg" />
                    <span className="font-mogra text-2xl md:text-3xl font-extrabold text-emerald-700 tracking-tight drop-shadow-lg">
                        Green
                        <span className="text-lime-500">Grass</span>
                        Valley
                    </span>
                </div>
                {/* Desktop nav */}
                <ul className="hidden md:flex gap-1 md:gap-6">
                    {navLinks.map(link =>
                        link.href.startsWith("/") ? (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className={`px-3 py-2 md:px-4 md:py-2 rounded-lg font-poppins text-base md:text-lg font-bold transition-colors ${
                                        location.pathname === link.href
                                            ? "bg-gradient-to-r from-green-500 to-lime-400 text-white shadow-md"
                                            : "text-emerald-700 hover:bg-lime-100 hover:text-lime-700"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ) : (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="px-3 py-2 md:px-4 md:py-2 rounded-lg font-poppins text-base md:text-lg font-bold text-emerald-700 hover:bg-lime-100 hover:text-lime-700 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        )
                    )}
                </ul>
                {/* Mobile nav */}
                <div className="md:hidden">
                    <button
                        aria-label="Abrir menú"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded-md text-green-700 hover:bg-lime-100 transition"
                    >
                        {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-green-200 shadow-lg">
                    <ul className="flex flex-col gap-2 px-6 py-4">
                        {navLinks.map(link =>
                            link.href.startsWith("/") ? (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block px-3 py-2 rounded-lg font-poppins text-base font-bold transition-colors ${
                                            location.pathname === link.href
                                                ? "bg-gradient-to-r from-green-500 to-lime-400 text-white shadow-md"
                                                : "text-emerald-700 hover:bg-lime-100 hover:text-lime-700"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ) : (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-3 py-2 rounded-lg font-poppins text-base font-bold text-emerald-700 hover:bg-lime-100 hover:text-lime-700 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};