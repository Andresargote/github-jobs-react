//renderizar cards
import React, {useState} from 'react';

import './styles/MainCardsAndFilter.css';
import useFetchJobs from '../hooks/useFetchJobs';
import { GithubCards } from './GithubCards';
import {FiltersGithub} from './FiltersGithub';
import { jobsContext } from '../dataContext/jobsContext';
import LoaderData from './LoaderData';

export const MainCardsAndFilter = () => {

    const [params, setParams] = useState({});
    const {jobs, loading, error} = useFetchJobs(params);

    console.log(jobs);

    return (
        <main>
            <jobsContext.Provider value={{
                params,
                setParams,
                jobs,
            }}> 
                <FiltersGithub />
                <div>
                
                {(loading) &&  <LoaderData />}
                {(error) && <h2>Error: ${jobs.error}. Try Refreshing</h2>}
                {jobs.map((job) => (
                        <GithubCards key={job.id} {...job}/>
                ))}
                </div>
            </jobsContext.Provider>
        </main>
    )
}
