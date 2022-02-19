import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/configureStore';
import { AppRouter } from './router/AppRouter';
import * as GlobalStyles from './globals/stylesGlobals';

function App() {
  return (
   <Provider store={store}>
     <GlobalStyles.GlobalCSS/>
     <AppRouter/>
   </Provider>
  );
}

export default App;
