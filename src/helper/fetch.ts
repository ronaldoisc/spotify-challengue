


const baseUrl = process.env.REACT_APP_API_URL;

export const customeFecthWithToken = (endpoint: any, data: any, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    

    if (method === 'GET') {
        return fetch(url, {
            headers: {
                'Authorization': 'Bearer BQAsoeGSQtQWxcCDMZTvXy7VNNWQxjSsdZ8KCl7qirQP4-cGe48pi3FyfcD9gRUiDh_eO2BCYAKJ4h5yGzc'
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