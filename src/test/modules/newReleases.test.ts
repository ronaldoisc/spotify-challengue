import configureStore from 'redux-mock-store' //ES6 modules
import reducer, { loadNewReleases, types } from "../../redux/modules/newReleases";
import thunk from 'redux-thunk';
export { };

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  releases: [],
  checkingToken:true
}
Storage.prototype.setItem = jest.fn();

let store = mockStore(initialState);
describe('test in the newreleases module', () => {
  beforeEach(() => {
    store = mockStore(initialState);

  })
  // TEST IN THE TYPES
  test('the types should be equals', async () => {

    expect(types).toEqual({
      LOAD: 'spotify/new-releases/LOAD',
      checkingFinished: 'spotify-challengue/new-releases/checkingFinish'
    });

  });

  // TEST IN THE REDUCER
  test('should return the default state', async () => {
    const action = {
      type: '',
      payload: []
    }
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);

  });

  test('should set the newReleases', async () => {
    const action = {
      type: types.LOAD,
      payload: [
        {
          id: '72r4dr0xDsXOWRwP2o7ZIP',
          name: 'Nail Tech',
          albumType: 'single',
          image: 'https://i.scdn.co/image/ab67616d0000b27378f69f03ed1625da85cb462b',
          artists: [
            {
              id: '2LIk90788K0zvyj2JJVwkJ',
              name: 'Jack Harlow'
            }
          ]
        }
      ]
    }

    const state = reducer(initialState, action);
    expect(state).toEqual({
      checkingToken: false,
      releases: [
        {
          id: '72r4dr0xDsXOWRwP2o7ZIP',
          name: 'Nail Tech',
          albumType: 'single',
          image: 'https://i.scdn.co/image/ab67616d0000b27378f69f03ed1625da85cb462b',
          artists: [
            {
              id: '2LIk90788K0zvyj2JJVwkJ',
              name: 'Jack Harlow'
            }
          ]
        }
      ]
    });




  });
  // TEST IN THE ACTIONS
  test('loadNewReleases should create the action', async () => {

    const release = [
      {
        id: '72r4dr0xDsXOWRwP2o7ZIP',
        name: 'Nail Tech',
        albumType: 'single',
        image: 'https://i.scdn.co/image/ab67616d0000b27378f69f03ed1625da85cb462b',
        artists: [
          {
            id: '2LIk90788K0zvyj2JJVwkJ',
            name: 'Jack Harlow'
          }
        ]
      }
    ];
    await store.dispatch(loadNewReleases(release));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type:types.LOAD,
      payload:expect.any(Array)
    });
  })



  // Functions Async

  // test('startLoadingNewReleases should return all newReleases', async () => { 
  //   fetchModule.customeFecthWithToken = jest.fn(() => ({
  //     json() {
  //         return {
            
  //         }
  //     }
  // }));
  //    await store.dispatch(startLoadingNewReleases());
  //    const actions=store.getActions();
  //    console.log(actions)
  //     // expect(actions[1]).toEqual({
  //     //   type:types.LOAD,
  //     //   payload:expect.any(Array)
  //     // })
  // },200000)

});

