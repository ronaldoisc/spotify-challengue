


const baseUrl = process.env.REACT_APP_API_URL;

export const customeFecthWithToken = (endpoint: any, data: any, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    

    if (method === 'GET') {
        return fetch(url, {
            headers: {
              
                'Authorization': 'Bearer BQDddAZOsVwbYexQxLu7u3Dllo6Zw97HsxP6VIUIDaHHnUW64TQbu02Un1o_-i4egNZ2Q1KZalLIzyzKi1M'
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