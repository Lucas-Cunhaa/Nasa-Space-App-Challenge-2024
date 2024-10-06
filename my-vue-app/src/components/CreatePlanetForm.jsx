import React, { useState } from 'react';
import "../css/form.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const API_KEY = 'JAHSc6XMf3vjpr8kNJAXReOHYuGjdtDGiEXdyJkf';
const BASE_URL = '/TAP/sync?query=SELECT * FROM pspec';

const CreatePlanetForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [similarPlanets, setSimilarPlanets] = useState([]);
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
            const planets = response.data;

            const targetPlanet = planets.find(planet => 
                planet.mass === parseFloat(data.mass) &&
                planet.temperature === parseFloat(data.temperature) &&
                planet.radius === parseFloat(data.size)
            );

            if (targetPlanet) {
                const similar = planets.filter(planet => 
                    Math.abs(planet.mass - targetPlanet.mass) < 0.5 && 
                    Math.abs(planet.radius - targetPlanet.radius) < 0.5 &&
                    Math.abs(planet.temperature - targetPlanet.temperature) < 50
                );

                setSimilarPlanets(similar);
                setError('');
            } else {
                setError('No similar planets found.');
                setSimilarPlanets([]);
            }
        } catch (err) {
            setError('Error fetching exoplanet data.');
            setSimilarPlanets([]);
        }
    };

    const stars = [
        "Proxima Centauri",
        "TRAPPIST - 1",
        "Kepler - 186",
        "Pegasi",
        "Tau Ceti", 
        "GSC 02620-00648"
    ];
    
    const starsOptions = (stars) => {
        return stars.map((star, index) => (
            <option key={index} value={star}>
                {star}
            </option>
        ));
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        {...register('name', { required: 'Name is required' })} 
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className='form-group select-div'>
                    <label className="select">Star:</label>
                    <select
                        id="star"
                        className="custom-select"
                        {...register("star", { required: true })}
                    >
                        {starsOptions(stars)}
                    </select>
                    {errors.star && <p>{errors.star.message}</p>}
                </div>

                <div className='form-group'>
                    <label>Size (radius in KM):</label>
                    <div> 
                        <input 
                            type="number" 
                            {...register('size', { required: 'Size is required' })} 
                        />
                    </div>
                    {errors.size && <p>{errors.size.message}</p>}
                </div>

                <div className='form-group'>
                    <label>Temperature(Kelvin):</label>
                    <input 
                        type="text" 
                        {...register('temperature', { required: 'Temperature is required' })} 
                    />
                    {errors.temperature && <p>{errors.temperature.message}</p>}
                </div>

                <div>
                    <label>Mass(Ton):</label>
                    <input 
                        type="number" 
                        {...register('mass', { required: 'Mass is required' })} 
                    />
                    {errors.mass && <p>{errors.mass.message}</p>}
                </div>

                <button className="link-button" type="submit">Submit</button>
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

export default CreatePlanetForm;
