import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetchJobs(id) {
    const AllJobsDetailsUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?`;
    const [state, setState] = useState({ jobs: {}, loading: true, error: null });

    useEffect(() => {
        axios.get(AllJobsDetailsUrl, {
            params: {markdown: true},
        }).then(res => {
            setState({jobs: res.data, loading: false, error: null});
        }).catch(error => {
            setState({jobs: {}, loading: false, error: error})
        })
    }, [id]);

    return state;
}
