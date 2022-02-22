import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { AppRouter } from './router/AppRouter';
import * as GlobalStyles from './globals/stylesGlobals';
import { ThemeProvider } from "styled-components";
import { theme } from './globals/stylesGlobals';
function App() {
  return (
    
   <Provider store={store}>
     <GlobalStyles.GlobalCSS/>
     <ThemeProvider theme={theme}>
       <AppRouter/>
     </ThemeProvider>
   </Provider>
  );
}

export default App;
