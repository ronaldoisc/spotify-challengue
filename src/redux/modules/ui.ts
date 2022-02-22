import { customeFetchWithOutToken } from '../../helper/fetch';
interface UI{
    type:string
}

export const types={
    startLoading:'spotify-challebgue/ui/startLoading',
    finishLoading:'spotify-challebgue/ui/finishLoading'
}

const initialState={
    isLoading:false
}

export default function reducer(state = initialState, action:UI){

    switch (action.type) {
        case types.startLoading:
            
            return {
                ...state,
                isLoading:true
            }
        case types.finishLoading:
            return {
                ...state,
                isLoading:false
            }
        
    
        default:
            return state;
    }
}

// ACTIONS CREATORS

export const startLoading=()=>({
    type:types.startLoading
});

export const finishLoading=()=>({
    type:types.finishLoading

});


export const startCheckingToken=()=>{
    return async()=>{
      const resp=await customeFetchWithOutToken('token/renew',{},'GET');
      const body=await resp.json();
      console.log(body);
      localStorage.setItem('token',body.token);
     
    }
}