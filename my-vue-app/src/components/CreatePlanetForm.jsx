import React from 'react';
import "../css/form.css"
import { useForm } from 'react-hook-form';

const CreatePlanetForm = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
    
        const onSubmit = (data) => {
            console.log(data); 
        };

        const stars = [
            "Proxima Centauri",
            "TRAPPIST - 1",
            "Kepler - 186",
            "Pegasi",
            "Tau Ceti", 
            "GSC 02620-00648"
        ]
        
        const starsOptions = (stars) => {
            return stars.map(( star, index) => {
                return (
                    <option key={index} value={star}>
                        {star}
                    </option>
                )
            })
        }

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
                    <label>Size(radio KM):</label>
                    <div> 
                            <input 
                                type="number" 
                                {...register('size', { required: 'Size is required' })} 
                            />
                    </div>
                    {errors.size && <p>{errors.size.message}</p>}
                </div>
    
                <div>
                    <label>Mass:</label>
                    <input 
                        type="number" 
                        {...register('mass', { required: 'Mass is required' })} 
                    />
                    {errors.mass && <p>{errors.mass.message}</p>}
                </div>
    
                <button className ="link-button" type="submit">Submit</button>
            </form>
        </div>
        );
    }; 

export default CreatePlanetForm