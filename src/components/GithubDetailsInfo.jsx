import React from 'react';
import {Link} from 'react-router-dom';

import useFetchDetailsJobs from '../hooks/useFetchDetailsJobs';
import LoaderData from './LoaderData';

export const GithubDetailsInfo = () => {

    const data = useFetchDetailsJobs("7f8942aa-7eff-445b-8496-a9487cdb68f4");
    console.log(data.jobs);

    if(data.loading){
        return <LoaderData/>
    }

    return (
        <>
            <div className="btn-return">
                <Link to="/" className="btn-return-link">Back to search</Link>
            </div>

            <div>
                <h4>HOW TO APPLY</h4>
                <p>{data.jobs.how_to_apply}</p>
            </div>

            <article>
                <h3>{data.jobs.title}</h3>
                <span className="full-time">{data.jobs.type}</span>
                <span className="location-time">5 days ago</span>

                <div className="article__img">
                    <img src={data.jobs.company_logo} alt={data.jobs.title}/>
                    <div className="article__info">
                        <span>{data.jobs.company}</span>
                        <span className="location-time">{data.jobs.location}</span>
                    </div>
                    <p>{data.jobs.description}</p>
                </div>
            </article>
        </>
    )
}