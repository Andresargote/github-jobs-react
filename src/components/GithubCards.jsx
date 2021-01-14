//hacer cards
import React from 'react';
import {Link} from 'react-router-dom';

import './styles/GithubCards.css';

export const GithubCards = (props) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="card-img">
                <img className="animate__animated animate__fadeIn" src={props.company_logo} alt={props.title}/>
            </div>
            <div className="card-info">
                <h3>{props.company}</h3>
                <span className="title"><Link to={`/job/${props.id}`}>{props.title}</Link></span>
                <div className="card-details">
                    <span className="full-time">{props.type}</span>
                    <div className="container">
                        <span className="location-time">{props.location}</span>
                        <span className="location-time">5 days ago</span>
                    </div>
                </div>
            </div>
        </div>
   )
}
