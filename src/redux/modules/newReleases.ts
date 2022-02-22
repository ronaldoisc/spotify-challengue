import { customeFecthWithToken } from "../../helper/fetch";
import { prepareReleases } from "../../helper/prepareReleases";
import { startLoading, finishLoading, startCheckingToken } from './ui';
interface IReleaseReducer {
    type: string,
    payload: any
}

//ACTIONS
export const types = {
    LOAD: 'spotify/new-releases/LOAD'
}

const initialState = {
    releases: []
}


//REDUCER
export default function reducer(state = initialState, action: IReleaseReducer) {
    switch (action.type) {
        case types.LOAD:
            return {
                ...state,
                releases: [...action.payload]
            }

        default:
            return state;
    }
}


//ACTIONS CREATORS

export const loadNewReleases = (newReleases:Array<object>) => ({
    type: types.LOAD,
    payload: newReleases

});

//THUNK
// function to load the new releases
export const startLoadingNewReleases = () => {
    return async (dispatch: any) => {
        try {
            dispatch(startCheckingToken());
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
