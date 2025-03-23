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
        <textarea
          placeholder="Escribe tu sugerencia"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          required
          className={styles.cajacomentario}
        />
        <button type="submit" className={styles.botonComentario}>Enviar sugerencia</button>
      </form>
      
    </div>
  );
};

export default SuggestionForm;
