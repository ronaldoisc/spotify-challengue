


const baseUrl = process.env.REACT_APP_API_URL;
const baseUrlSpotify=process.env.REACT_APP_API_URL_SPOTIFY;

export const customeFecthWithToken = (endpoint: string, data: object, method = 'GET') => {

  
    const url = `${baseUrl}/${endpoint}`;
    const token=localStorage.getItem('token') || '';
    
    if (method === 'GET') {
        return fetch(url, {
            headers: {
              
                'Authorization': `Bearer ${token}`
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

export const customeFetchWithOutToken=(endpoint:string,data:object,method='GET')=>{
    const url = `${baseUrlSpotify}/${endpoint}`;
  
    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}