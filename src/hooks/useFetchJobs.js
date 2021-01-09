import {useReducer, useEffect} from 'react';
import axios from 'axios';


const Actions = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
}

const AllJobsUrl = "http://localhost:8010/proxy/positions.json";

const reducer = (state, action) => {
    switch (action.type) {
        case Actions.MAKE_REQUEST:
            return {loading: true, jobs: []};
        case Actions.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs};
        case Actions.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []};
        default:
            return state;
    }
}

export default function useFetchJobs(params) {
    console.log(params);
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

    useEffect(() => {
        dispatch({type: Actions.MAKE_REQUEST})
        axios.get(AllJobsUrl, {
            params: {markdown: true, ...params},
        }).then(res => {
            dispatch({type: Actions.GET_DATA, payload: {jobs: res.data}})
        }).catch(error => {
            dispatch({type: Actions.ERROR, payload: {error: error}})
        })
    }, [params]);

    return state;
}

/*export const useFetchJobs = () => {

    const AllJobsUrl = "http://localhost:8010/proxy/positions.json";

    const [jobs, setJobs] = useState({
        jobs: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        axios.get(AllJobsUrl)
            .then(response => setJobs({jobs:response.data, loading: false, error: null}))
            .catch(error => setJobs({jobs: [], loading: false, error: error}))
    }, [])

    return {jobs, setJobs}
}*/
