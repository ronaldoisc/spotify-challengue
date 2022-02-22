
import reducer, { types } from '../../redux/modules/ui';

export {};


const initialState={
    isLoading:false
}
describe('test in the ui module', () => { 
    test('types should be equals', async () => { 
        expect(types).toEqual({
            startLoading:'spotify-challebgue/ui/startLoading',
            finishLoading:'spotify-challebgue/ui/finishLoading'
        })
    });

    test('should return the default state', async () => {
        const action = {
            type: '',
            payload: []
          }
        const state = reducer(initialState, action);
        expect(state).toEqual({ isLoading: false })


     });

     test('should return true', async () => {
        const action={
            type:types.startLoading,
        }
        const state=reducer(initialState,action);
        expect(state).toEqual({ isLoading: true })

      });

      test('should return false', async () => { 
        const action={
            type:types.finishLoading,
        }
        const state=reducer(initialState,action);
        expect(state).toEqual({ isLoading: false })
       })
})