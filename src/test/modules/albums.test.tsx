import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { types, loadArtistAlbums } from '../../redux/modules/albums';
import reducer from '../../redux/modules/albums';
export { };
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  list: []

}

let store = mockStore(initialState);
describe('test in the albums modules', () => {
  beforeEach(() => {
    store = mockStore(initialState);

  })
  test('types should be equals', async () => {
    expect(types).toEqual({
      loadArtistAlbums: 'spotify/albums/loadArtistAlbums'
    })
  })

  test('should return the default state', async () => {
    const action = {
      type: '',
      payload: []
    }
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  test('should set the albust artist', async () => {
    const action = {
      type: types.loadArtistAlbums,
      payload: [
        {
          id: '5g2INX6dnMIJG0xKygXwF3',
          name: 'Thats What They All Say',
          image: 'https://i.scdn.co/image/ab67616d0000b273aeb14ead136118a987246b63',
          release_date: '2020-12-11',
          artist: {
            id: '2LIk90788K0zvyj2JJVwkJ',
            name: 'Jack Harlow'
          }
        }
      ]
    }

    const state = reducer(initialState, action);

    expect(state).toEqual({
      list: [
        {
          id: '5g2INX6dnMIJG0xKygXwF3',
          name: 'Thats What They All Say',
          image: 'https://i.scdn.co/image/ab67616d0000b273aeb14ead136118a987246b63',
          release_date: '2020-12-11',
          artist: {
            id: '2LIk90788K0zvyj2JJVwkJ',
            name: 'Jack Harlow'
          }
        }
      ]
    })
  })
  test('loadArtistAlbums should set the albums artist', async () => {
    const list=[
      {
        id: '5g2INX6dnMIJG0xKygXwF3',
        name: 'Thats What They All Say',
        image: 'https://i.scdn.co/image/ab67616d0000b273aeb14ead136118a987246b63',
        release_date: '2020-12-11',
        artist: {
          id: '2LIk90788K0zvyj2JJVwkJ',
          name: 'Jack Harlow'
        }
      },
    ]
      await store.dispatch(loadArtistAlbums(list));

      const actions=store.getActions();
      expect(actions[0]).toEqual({
        type:types.loadArtistAlbums,
        payload:expect.any(Array)
      })

  });


});