import React, { useState, useRef, useEffect } from 'react';

// Página Principal (Página Inicial)
const MainPage = ({ onNavigate }) => {
  return (
    <div>
      <h1>Página Principal</h1>
      <button onClick={onNavigate}>Draw</button>
    </div>
  );
};

// Página de Desenho
const DrawingPage = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentSize, setCurrentSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const startDrawing = () => setDrawing(true);
    const stopDrawing = () => {
      setDrawing(false);
      context.beginPath(); // Para de desenhar
    };

    const draw = (event) => {
      if (!drawing) return;

      context.lineWidth = currentSize;
      context.lineCap = 'round';
      context.strokeStyle = isErasing ? '#FFFFFF' : currentColor;

      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    };

    // Eventos de desenho
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    // Limpeza dos eventos quando o componente é desmontado
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [drawing, currentColor, currentSize, isErasing]);

  const handleSave = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'meu_desenho.png';
    link.click();
  };

  return (
    <div>
      <h1>Drawing</h1>

      {/* Canvas para desenhar */}
      <canvas ref={canvasRef} width="1450" height="550" style={{ border: '1px solid black' }}></canvas>

      {/* Controles */}
      <div className="controls" style={{ marginTop: '10px' }}>
        <label htmlFor="colorPicker">Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={currentColor}
          onChange={(e) => {
            setCurrentColor(e.target.value);
            setIsErasing(false);
          }}
        />

        <label htmlFor="sizePicker">Size:</label>
        <input
          type="range"
          id="sizePicker"
          min="1"
          max="50"
          value={currentSize}
          onChange={(e) => setCurrentSize(e.target.value)}
        />

        <img
          src="imagens/pencil.png"
          className={`icon ${!isErasing ? 'selected' : ''}`}
          alt="Lápis"
          style={{ width: '40px', height: '40px', marginRight: '10px', cursor: 'pointer' }}
          onClick={() => setIsErasing(false)}
        />

        <img
          src="imagens/eraser.png"
          className={`icon ${isErasing ? 'selected' : ''}`}
          alt="Borracha"
          style={{ width: '40px', height: '40px', marginRight: '10px', cursor: 'pointer' }}
          onClick={() => setIsErasing(true)}
        />

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

// Componente Principal que controla a navegação
const Paint = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const handleNavigateToDrawing = () => {
    setCurrentPage('drawing');
  };

  return (
    <div>
      {currentPage === 'main' ? (
        <MainPage onNavigate={handleNavigateToDrawing} />
      ) : (
        <DrawingPage />
      )}
    </div>
  );
};

export default Paint;
