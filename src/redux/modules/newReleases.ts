import { customeFecthWithToken } from "../../helper/fetch";
import { prepareReleases } from "../../helper/prepareReleases";
import { startLoading, finishLoading } from './ui';
interface Releases {
    type: string,
    payload: Array<String>
}
//ACTIONS
const types = {
    LOAD: 'spotify/new-releases/LOAD'
}

const initialState = {
    releases: []
}


//REDUCER
export default function reducer(state = initialState, action: Releases) {
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

const loadNewReleases = (newReleases: Releases) => ({
    type: types.LOAD,
    payload: newReleases

});

//THUNK

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
