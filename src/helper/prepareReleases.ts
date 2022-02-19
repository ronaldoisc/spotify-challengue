

export const prepareReleases = (releases: any) => {

    return releases.map((item: any) => ({

        id: item.id,
        name: item.name,
        albumType: item.album_type,
        image: item.images[0].url,
        artists: item.artists.map((artist: any) => ({
            id: artist.id,
            name: artist.name
        })),
    }))
}