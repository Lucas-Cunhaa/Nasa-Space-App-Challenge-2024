import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'SUA_CHAVE_API';
const BASE_URL = 'https://api.leonardodl.com/nasa/exoplanet';

const ExoplanetFinder = () => {
    const [planetName, setPlanetName] = useState('');
    const [similarPlanets, setSimilarPlanets] = useState([]);
    const [error, setError] = useState('');

    const getSimilarPlanets = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
            const data = response.data;

            const targetPlanet = data.find(planet => planet.name === planetName);

            if (targetPlanet) {

                const { mass, radius, temperature } = targetPlanet;

                const similar = data.filter(planet => 
                    planet.mass && planet.radius && planet.temperature &&
                    Math.abs(planet.mass - mass) < 0.5 && 
                    Math.abs(planet.radius - radius) < 0.5 &&
                    Math.abs(planet.temperature - temperature) < 50 
                );

                setSimilarPlanets(similar);
                setError('');
            } else {
                setSimilarPlanets(["Planet has not been found"]);
            }
        } catch (err) {
            setError('Error');
            setSimilarPlanets(["Planet has not been found"]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getSimilarPlanets();
    };

    return (
        <div>
            <h1>Encontrar Planetas Semelhantes</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={planetName}
                    onChange={(e) => setPlanetName(e.target.value)}
                    placeholder="Nome do Planeta"
                    required
                />
                <button type="submit">Buscar</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {similarPlanets.length > 0 && (
                <ul>
                    {similarPlanets.map((planet, index) => (
                        <li key={index}>
                            <strong>{planet.name}</strong> - Mass: {planet.mass}, Radius: {planet.radius}, Temperature: {planet.temperature}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExoplanetFinder;
