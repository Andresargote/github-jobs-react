import React, {useState} from 'react';

//Importar en componentes
import {HeaderGithub} from '../components/HeaderGithub';
import { MainCardsAndFilter } from '../components/MainCardsAndFilter';
import { jobsContext } from '../dataContext/jobsContext';
import useFetchJobs from '../hooks/useFetchJobs';

export const JobsScreen = () => {

    const [params, setParams] = useState({});
    const {jobs, loading, error} = useFetchJobs(params);

    return (
        <>
            <jobsContext.Provider value={{
                params,
                setParams,
                jobs,
                loading,
                error,
            }}>
                <HeaderGithub />  
                <MainCardsAndFilter />
            </jobsContext.Provider>
        </>
    )
}
