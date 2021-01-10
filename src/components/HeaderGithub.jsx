import React, {useState, useContext} from 'react';

//importar estilos
import './styles/HeaderGithub.css';
import { jobsContext } from '../dataContext/jobsContext';

export const HeaderGithub = () => {

    const [input, setInput] = useState("");
    const {setParams} = useContext(jobsContext);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const param = e.target[0].name;
        const value = input;

        setParams(prevParams => {
            return {...prevParams, [param]: value}
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const param = e.target.form[0].name;
        const value = input;

        setParams(prevParams => {
            return {...prevParams, [param]: value}
        })
    }



    return (
        <header>
            <h1><b>Github</b> Jobs</h1>
            <div className="search-container">
                <form onSubmit={handleSubmit} className="search-input-container">
                    <input type="text" onChange={handleInput} value={input} name="description" placeholder="Title, companies, expertise or benefits"/>
                    <input onClick={handleClick}type="button" value="Search"/>
                </form>
            </div>
        </header>
    )
}
