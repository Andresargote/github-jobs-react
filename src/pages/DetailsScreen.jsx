import React from 'react'
import { GithubDetailsInfo } from '../components/GithubDetailsInfo'
import { GithubHeaderDetails } from '../components/GithubHeaderDetails'

export const DetailsScreen = () => {
    return (
        <div>
            <GithubHeaderDetails/>
            <GithubDetailsInfo/>
        </div>
    )
}
