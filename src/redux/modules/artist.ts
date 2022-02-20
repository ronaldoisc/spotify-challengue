import { customeFecthWithToken } from '../../helper/fetch';
import { prepareArtist } from '../../helper/prepareArtist';

interface Artist{
    type:string,
    payload:Object
}

const types={
    loadArtistById:'spotify/artist/loadArtistById'
}

const initialState={
   activeArtist:null

}

export default function reducer(state=initialState,action:Artist){
    switch (action.type) {
        case types.loadArtistById:
            return {
                ...state,
                activeArtist:action.payload
            }
    
        default:
            return state;
    }
}

// ACTIONS CREATORS

export const setActiveArtist=(artist)=>({
    type:types.loadArtistById,
    payload:artist
});

// function to get artist information by id
export const startLoadingArtistById=(artistId)=>{
    return async(dispatch)=>{

        const resp=await customeFecthWithToken(`artists/${artistId}`,{},'GET');
        const body=await resp.json();
        const artist=prepareArtist(body);
        dispatch(setActiveArtist(artist));

    }
}