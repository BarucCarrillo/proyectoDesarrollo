"use client";
import { useState } from "react";

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/recover-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

return (
  <div className="flex flex-col items-center justify-center font-sans">
    <h2 className="mb-5 text-2xl font-semibold">Recuperar Contraseña</h2>
    {message && <p className="mb-5 text-green-500">{message}</p>}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setMessage("Por favor, ingresa un correo electrónico válido. ejemplo@dominio.com");
          return;
        }
        handleSubmit(e);
      }}
      className="flex flex-col items-center w-72"
    >
      <input
        type="email"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 mb-3 w-full border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Recuperar
      </button>
    </form>
  </div>
);
}
