import { customeFecthWithToken } from '../../helper/fetch';
import { prepareTrack, prepareTracks } from '../../helper/prepareTracks';

import { startLoading, finishLoading } from './ui';
// TYPES
const types = {
    loadAlbumTracks: 'spotify/tracks/LoadAlbumTracks',
    trackActive: 'spotify/tracks/set'
}

//INITIALSTATE
const initialState = {
    active: null,
    items: [],


}
// REDUCER
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.loadAlbumTracks:
            return {
                ...state,
                items: [...action.payload]
            }
        case types.trackActive:
            return {
                ...state,
                active: action.payload
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

const setTrack = (track) => ({
    type: types.trackActive,
    payload: track
});


// load all the album tracks by albumId
export const startLoadingAlbumTracks = (albumId) => {
    return async (dispatch) => {
        try {
           
            dispatch(startLoading());
            const resp = await customeFecthWithToken(`albums/${albumId}/tracks`, {}, 'GET');
            const body = await resp.json();
            const tracks = prepareTracks(body.items);
            dispatch(loadAlbumTracks(tracks));
            dispatch(finishLoading());


        } catch (error) {
        }
    }
}

// get the track information by id
export const startLadingTrackById = (trackId) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const resp = await customeFecthWithToken(`tracks/${trackId}`, {}, 'GET');
        const body = await resp.json();
        const track = prepareTrack(body);
        dispatch(setTrack(track));
        dispatch(finishLoading());
    }

}