import React, { useRef, useState } from 'react';
import '../css/paint.css'; // Para estilos CSS, separei para facilitar a leitura

const Paint = () => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [currentColor, setCurrentColor] = useState('#000000');
    const [currentSize, setCurrentSize] = useState(5);
    const [isErasing, setIsErasing] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    const startDrawing = () => setDrawing(true);
    const stopDrawing = () => {
        setDrawing(false);
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
    };

    const draw = (event) => {
        if (!drawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = currentSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = isErasing ? '#FFFFFF' : currentColor;

        ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    };

    const showDrawing = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL('image/png');
        setImageSrc(dataURL);
        canvas.style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
    };

    return (
        <div>
            <h1>Drawing</h1>
            <canvas className='draw-canvas'
                ref={canvasRef}
                width={1450}
                height={550}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                style={{ border: '1px solid black' }}
            ></canvas>

            <div className="controls">
                <label htmlFor="color">Color:</label>
                <input
                    type="color"
                    value={currentColor}
                    onChange={(e) => setCurrentColor(e.target.value)}
                />
                
                <label htmlFor="size">Size:</label>
                <input
                    type="range"
                    min="1"
                    max="50"
                    value={currentSize}
                    onChange={(e) => setCurrentSize(e.target.value)}
                />
                
                <img
                    src="./imagens/pencil.png"
                    className={`icon ${!isErasing ? 'selected' : ''}`}
                    alt="Pencil"
                    onClick={() => {
                        setIsErasing(false);
                    }}
                />
                <img
                    src="./imagens/eraser.png"
                    className={`icon ${isErasing ? 'selected' : ''}`}
                    alt="Eraser"
                    onClick={() => {
                        setIsErasing(true);
                    }}
                />

                <button onClick={showDrawing}>Show the Planet</button>
            </div>

            {imageSrc && (
                <div className="image-container">
                    <h2>Your exoplanet:</h2>
                    <img src={imageSrc} alt="Desenho do Planeta" style={{ border: '1px solid black', width: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
};

export default Paint;
