import { customeFecthWithToken } from '../../helper/fetch';
import { prepareArtistAlbums } from '../../helper/prepareAlbums';
import { startLoading, finishLoading } from './ui';

interface Album{
    type:string,
    payload: Array<String>
}


const types = {
    loadArtistAlbums: 'spotify/albums/loadArtistAlbums'
}
const initialState = {
    list: []

}
export default function reducer(state = initialState, action: Album) {
    switch (action.type) {
        case types.loadArtistAlbums:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state;
    }
}


// ACTIONS CREATORS
const loadArtistAlbums = (artistAlbums) => ({
    type: types.loadArtistAlbums,
    payload: artistAlbums
});


// Function to get the artist albums by artistId
export const startLoadingArtistAlbums = (artistId) => {
    return async (dispatch) => {

        try {
            dispatch(startLoading());
            const resp = await customeFecthWithToken(`artists/${artistId}/albums`, {}, 'GET');
            const body = await resp.json();
            const albums = prepareArtistAlbums(body.items);
            dispatch(loadArtistAlbums(albums));
            dispatch(finishLoading());
        } catch (error) {
            dispatch(finishLoading());
        }
    }
}