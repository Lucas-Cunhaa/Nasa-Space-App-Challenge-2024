import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../css/form.css";

const CreatePlanetForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [similarPlanets, setSimilarPlanets] = useState([]);
    const [error, setError] = useState('');

    const onSubmit = (data) => {
        try {
            const planet = 
                {
                name: "Kepler-186f",
                star: "Kepler-186",
                mass: 10000000, 
                radius: 1.1, 
                temperature: 127
                }
                
                console.log(data)
                setSimilarPlanets([planet]);
                setError('');

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

                <button onClick={onSubmit} className="link-button" type="submit">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {similarPlanets.length > 0 && (
                <ul>
                    {similarPlanets.map((planet, index) => (
                        <li key={index}>
                            <h1> You found a similar planet based on your's!</h1>
                            <h2><strong>{planet.name}</strong> - Mass: {planet.mass}, Radius: {planet.radius}, Temperature: {planet.temperature} </h2>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}; 

export default CreatePlanetForm;
