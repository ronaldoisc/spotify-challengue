export const prepareArtistAlbums=(albums)=>{

    return albums.map(album=>({
        id:album.id,
        name:album.name,
        image:album.images[0].url,
        release_date:album.release_date,
        artist:{
            id:album.artists[0].id,
            name:album.artists[0].name
        }
    }))

}