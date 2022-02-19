
export const prepareTracks = (tracks ) => {
    return tracks.map((track) => ({

        id: track.id,
        name: track.name,
        previewUrl: track.preview_url,
        uri:track.uri,
        artist: {
            id: track.artists[0].id,
            name: track.artists[0].name
        }
    }));

    

}