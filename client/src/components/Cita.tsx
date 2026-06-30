import React from 'react';

interface CitaProps {
  texto: string;
}

const Cita: React.FC<CitaProps> = ({ texto }) => {
  const renderTexto = (txt: string) => {
    const parts = txt.split('*');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <strong key={index} className="text-theme-main font-bold">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="quote-container">
      <p className="quote-text">
        «{renderTexto(texto)}»
      </p>
    </div>
  );
};

export default Cita;
