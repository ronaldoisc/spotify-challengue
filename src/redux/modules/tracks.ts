import { customeFecthWithToken } from '../../helper/fetch';
import { prepareTracks } from '../../helper/prepareTracks';
// TYPES
const types = {
    loadAlbumTracks: 'spotify/tracks/LoadAlbumTracks'
}

//INITIALSTATE
const initialState = {
   items:[]
}
// REDUCER
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.loadAlbumTracks:
            return {
                ...state,
                items:[...action.payload]
            }
        default:
            return state;
    }
}

// ACTIONS CREATORIS

const loadAlbumTracks = (tracks) => ({
    type: types.loadAlbumTracks,
    payload: tracks

});

export const startLoadingAlbumTracks = (albumId) => {
    return async (dispatch) => {
        try {
            const resp = await customeFecthWithToken(`albums/${albumId}/tracks`, {}, 'GET');
            const body = await resp.json();
          
            const tracks = prepareTracks(body.items);
            dispatch(loadAlbumTracks(tracks));
            

        } catch (error) {
            

        }
    }
}