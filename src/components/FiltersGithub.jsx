import React, {useState, useContext} from 'react';

import './styles/FiltersGithub.css';
import { jobsContext } from '../dataContext/jobsContext';

export const FiltersGithub = () => {

    const [input, setInput] = useState("");
    const {setParams} = useContext(jobsContext);

    const handleParamsChange = (e) => {
        const param = e.target.name;
        const value = e.target.value;

        setParams(prevParams => {
            return {...prevParams, [param]: value}
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const param = e.target[0].name;
        const value = input;

        setParams(prevParams => {
            return {...prevParams, [param]: value}
        })

        setInput("");
    }

    return (
        <div className="filters-container">
            <label className="full-time">
                <input type="checkbox" onChange={handleParamsChange} value="full_time" name="full_time" />
                <span>Full time</span>
            </label>
            <div className="location-filter">
                <h4>LOCATION</h4>

                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setInput(e.target.value)} value={input} name="location" placeholder="City, state, zip code or country"/>
                </form>

                <label className="location">
                    <input type="checkbox" onChange={handleParamsChange} value="london" name="location" />
                    <span>London</span>
                </label>
                <label className="location">
                    <input type="checkbox"  onChange={handleParamsChange} value="amsterdan" name="location" />
                    <span>Amsterdan</span>
                </label>
                <label className="location">
                    <input type="checkbox" onChange={handleParamsChange} value="newyork" name="location" />
                    <span>New York</span>
                </label>
                <label className="location">
                    <input type="checkbox" onChange={handleParamsChange} value="berlin" name="location"/>
                    <span>Berlin</span>
                </label>

            </div>
        </div>
    )
}
