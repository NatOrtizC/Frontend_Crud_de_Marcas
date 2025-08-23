"use client";

import Home from "@/app/page";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideBar() {
    const pathName = usePathname();

    const links = [
        { href: "/register", label: "Tus Marcas" },
        { href: "/register/new", label: "Registra Tu Marca" },
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
                                href={link.href}
                                className={`${pathName === link.href ? "text-red-500 font-bold" : "text-gray-700" } hover:text-red-500`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
} 