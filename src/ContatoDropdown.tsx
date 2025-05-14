import { useState, useEffect, useRef } from 'react';
import './styles/ContatoDropdown.css';

const ContatoDropdown = () => {
  const [mostrar, setMostrar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMostrar(false);
      }
    };

    if (mostrar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mostrar]);

  return (
    <div className="contato-box" ref={ref}>
      <button className="contato-btn" onClick={() => setMostrar(prev => !prev)}>
        Contate-me
      </button>
      {mostrar && (
        <div className="contato-dropdown">
          <div><strong>Email:</strong> <a href="mailto:seuemail@email.com">anacarolinazambarda@gmail.com</a></div>
          <div><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">/anazambarda</a></div>
        </div>
      )}
    </div>
  );
};

export default ContatoDropdown;
