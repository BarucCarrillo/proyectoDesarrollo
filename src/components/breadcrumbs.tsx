"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Breadcrumbs = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Marcar como montado para evitar el error de enrutador
    setMounted(true);
  }, []);

  // No mostrar breadcrumbs hasta que el componente esté montado
  if (!mounted) {
    return null;
  }

  const pathnames = typeof window !== "undefined" ? window.location.pathname.split("/").filter((x: string) => x) : [];

  return (
    <nav className="text-lg text-gray-600 my-4 text-left" style={{ marginLeft: "5%" }}>
      <ul className="flex justify-left space-x-2">
        <li>
          <Link href="/" className="text-gray-800 hover:text-gray-600 font-semibold">Inicio</Link>
        </li>
        {pathnames.map((value: string, index: number) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={href} className="flex items-left">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold">{decodeURIComponent(value)}</span>
              ) : (
                <Link href={href} className="text-gray-800 hover:text-gray-600 font-semibold">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
