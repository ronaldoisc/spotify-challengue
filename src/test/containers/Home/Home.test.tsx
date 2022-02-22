import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Home } from '../../../containers/Home/Home';
import { ThemeProvider } from "styled-components";
import { theme } from '../../../globals/stylesGlobals';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    newReleases: {
        releases: []
    },
    ui: {
        isLoading: false
    }
};
let store = mockStore(initialState);
describe('test in the container folder', () => {

    test('should show the Home component correctly', async () => {

        const wrapper = mount(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Home />
                </ThemeProvider>
            </Provider>)

        expect(wrapper).toMatchSnapshot();

    });


})