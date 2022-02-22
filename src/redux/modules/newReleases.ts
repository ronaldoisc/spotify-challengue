import { customeFecthWithToken, customeFetchWithOutToken } from '../../helper/fetch';
import { prepareReleases } from "../../helper/prepareReleases";
import { startLoading, finishLoading } from './ui';

//ACTIONS
export const types = {
    LOAD: 'spotify/new-releases/LOAD',
    checkingFinished: 'spotify-challengue/new-releases/checkingFinish'
}

const initialState = {
    releases: [],
    checkingToken: true
}


//REDUCER
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case types.LOAD:
            return {
                ...state,
                checkingToken: false,
                releases: [...action.payload]
            }
        case types.checkingFinished:
            return {
                ...state,
                checkingToken: false
            }
        default:
            return state;
    }
}


//ACTIONS CREATORS

export const loadNewReleases = (newReleases: Array<object>) => ({
    type: types.LOAD,
    payload: newReleases

});

//THUNK
// function to load the new releases
export const startLoadingNewReleases = () => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());
            const resp = await customeFecthWithToken('browse/new-releases', {}, 'GET')
            const body = await resp.json();
            const releases = prepareReleases(body.albums.items);
            dispatch(loadNewReleases(releases));
            dispatch(finishLoading());
        } catch (error) {
            dispatch(finishLoading());
        }
    }
}

export const startCheckingToken = () => {
    return async (dispatch) => {


        const existToken = localStorage.getItem('token') || '';

        if (existToken === '' || existToken !=='') {
            const resp = await customeFetchWithOutToken('token/renew', {}, 'GET');
            const body = await resp.json();
            localStorage.setItem('token', body.token);
            dispatch(startLoadingNewReleases())

        }else{
            dispatch(finishChecking());
        }


    }
}

const finishChecking = () => ({
    type: types.checkingFinished
});
