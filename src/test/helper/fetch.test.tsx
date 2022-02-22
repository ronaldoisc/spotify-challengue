import { customeFecthWithToken, customeFetchWithOutToken } from '../../helper/fetch';
export {};
describe('test in the helper folder', () => { 
    let token = '';
    test('fetch without token', async () => { 
        const resp=await customeFetchWithOutToken('token/renew',{},'GET');
        const body=await resp.json();
        
       
        expect( resp instanceof Response ).toBe( true );
       token=body.token;
     },20000);

     test('fetch with token', async () => { 
        localStorage.setItem('token', token );
        const resp=await customeFecthWithToken('browse/new-releases',{},'GET');
        const body=await resp.json();
        expect( resp instanceof Response ).toBe( true );
        expect(body.albums.items ).toEqual(expect.any(Array))
     },20000)
 })