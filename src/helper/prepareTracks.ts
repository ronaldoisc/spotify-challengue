
export const prepareTracks = (tracks ) => {
    return tracks.map((track) => ({

        id: track.id,
        name: track.name,
        previewUrl: track.preview_url,
        duration:track.duration_ms,
        uri:track.uri,
        artist: {
            id: track.artists[0].id,
            name: track.artists[0].name
        }
    }));
}

export const prepareTrack=(track)=>{
    return {
        name:track.name,
        popularity:track.popularity,
        duration:track.duration_ms,
        artist:{
            name:track.artists[0].name
        },
        uri:track.uri
    }
}