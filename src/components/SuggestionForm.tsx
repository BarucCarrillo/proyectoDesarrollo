import { useState } from 'react';
import	styles from'@/styles/Comentario.module.css';

const SuggestionForm = () => {
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica que el correo y la sugerencia no estén vacíos
    if (!email || !suggestion) {
      setStatus('Por favor, llena todos los campos.');
      return;
    }

    const response = await fetch('/api/suggestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, suggestion }),
    });

    if (response.ok) {
      setStatus('Sugerencia enviada con éxito.');
      setEmail('');
      setSuggestion('');
    } else {
      setStatus('Hubo un error al enviar la sugerencia.');
    }
  };

  return (
    <div className={styles.seccioncomentario}>
      <h2 className={styles.titulocomentario}>Enviar sugerencia</h2>
      {status && <p className={styles.status}>{status}</p>}
      <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.email}
      />
      {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
        <p className={styles.error}>Por favor, ingresa un correo válido.</p>
      )}
      <textarea
        placeholder="Escribe tu sugerencia"
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        required
        className={styles.cajacomentario}
      />
      {suggestion && suggestion.length < 10 && (
        <p className={styles.error}>La sugerencia debe tener al menos 10 caracteres.</p>
      )}
      <button
        type="submit"
        className={styles.botonComentario}
        disabled={!email || !suggestion || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || suggestion.length < 10}
      >
        Enviar sugerencia
      </button>
      </form>
    </div>
  );
};

export default SuggestionForm;
