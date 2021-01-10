//renderizar cards
import React, {useContext} from 'react';

import './styles/MainCardsAndFilter.css';
import { GithubCards } from './GithubCards';
import {FiltersGithub} from './FiltersGithub';
import { jobsContext } from '../dataContext/jobsContext';
import LoaderData from './LoaderData';

export const MainCardsAndFilter = () => {

    const {jobs, loading, error} = useContext(jobsContext);

    return (
        <main>
            <FiltersGithub />
            <div>
                
                {(loading) &&  <LoaderData />}
                {(error) && <h2>Error: ${jobs.error}. Try Refreshing</h2>}
                {jobs.map((job) => (
                        <GithubCards key={job.id} {...job}/>
                ))}
            </div>
        </main>
    )
}
