import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { theme } from '../../../globals/stylesGlobals';
import { Albums } from '../../../containers/Albums/Albums';
import {
    BrowserRouter,

} from "react-router-dom";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    albums: {
        list: []
    },
    artist: {
        activeArtist: {
            id: '',
            name: ''
        }
    },
    ui: {
        isLoading: false
    }
};
let store = mockStore(initialState);

describe('test in the albums component', () => {
    test('should show the albums component correctly', async () => {
        const wrapper = mount(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Albums />
                    </BrowserRouter>
                </ThemeProvider>

            </Provider>)

        expect(wrapper).toMatchSnapshot();
    })

});