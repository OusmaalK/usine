import './styles.css';
import { useState } from 'react';

export default function App() {
  // List of greetings that can be displayed
  const greetings = [
    'Hello World',
    'Bonjour',
    'Hola',
    'Ciao',
    'Hallo',
    'Salam',
    'Olá',
    'Привет'
  ];

  // Current greeting shown in the UI
  const [message, setMessage] = useState('Hello World');

  return (
    <main className="container">
      {/* Use the high-resolution Factory logo */}
      {/* Use the authentic Factory star logo */}
      {/* Display official favicon logo from live Factory app */}
      {/* Display authentic Factory SVG logo */}
      <img src="/assets/logo.png" alt="Factory logo" width={128} />
      {/* Display the Factory wordmark */}
      <img
        src="/assets/wordmark.png"
        alt="Factory wordmark"
        width={320}
        className="wordmark"
      />
      <div className="hello-world-box">
        <p>{message}</p>
        <button
          onClick={() =>
            setMessage(greetings[Math.floor(Math.random() * greetings.length)])
          }
        >
          Afficher un salut aléatoire
        </button>
      </div>
    </main>
  );
}
