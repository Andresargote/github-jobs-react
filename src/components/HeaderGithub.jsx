import React from 'react';

//importar estilos
import './styles/HeaderGithub.css';

export const HeaderGithub = () => {

    return (
        <header>
            <h1><b>Github</b> Jobs</h1>
            <div className="search-container">
                <div className="search-input-container">
                    <input type="text" placeholder="Title, companies, expertise or benefits"/>
                    <input type="button" value="Search"/>
                </div>
            </div>
        </header>
    )
}
