


export const prepareArtist=(artist)=>{
    return {
         id:artist.id,
         name:artist.name,
         image:artist.images[0].url,
         followers:artist.followers.total,
         popularity:artist.popularity

    }
}