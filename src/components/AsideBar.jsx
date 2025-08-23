"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideBar() {
    const pathName = usePathname();

    const links = [
        { href: "/register", label: "Tus Marcas", enabled: true },
        { href: "/register/new", label: "Registra Tu Marca", enabled: true },
        { href: "/register/update", label: "Actualiza Tu Marca", enabled: false }
    ]

    return ( 
        <aside className="w-64 bg-red-200 p-4">
            <h2 className="text-xl font-bold mb-6">Panel</h2>

            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index} className="mb-2">
                            <Link
                                key={link.href}
                                href={ link.enabled ? link.href : "#" }
                                aria-disabled={!link.enabled}
                                className={`${pathName === link.href ? "text-red-500 font-bold" : "text-gray-700" } ${ link.enabled ? "" : "pointer-events-none opacity-85" } hover:text-red-500 block p-2 bg-white text-gray rounded`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
} 