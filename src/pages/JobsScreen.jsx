import React from 'react';

//Importar en componentes
import {HeaderGithub} from '../components/HeaderGithub';
import { MainCardsAndFilter } from '../components/MainCardsAndFilter';

export const JobsScreen = () => {
    return (
        <>
            <HeaderGithub />  
            <MainCardsAndFilter />
        </>
    )
}
