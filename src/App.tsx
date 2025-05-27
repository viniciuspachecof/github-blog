import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { PostsContextProvider } from './contexts/PostsContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PostsContextProvider>
            <Router />
          </PostsContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
