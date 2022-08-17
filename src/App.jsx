import { Box, createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Search from './features/Search/Search';
import Loading from './features/Loading/Loading';
import BookList from './features/BookList/BookList';
import { useSelector } from 'react-redux';

function App() {
  const status = useSelector((state) => state.search.status);
  const themeMode = useSelector((state) => state.booklist.mode);

  let content;
  switch (status) {
    case 'loading':
      content = <Loading />;
      break;
    case 'fulfilled':
      content = <BookList />;
      break;
    case 'rejected':
      content = <h1>Rejected</h1>;
  }

  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className='App'
        bgcolor='background.default'
        sx={{ minHeight: '100vh' }}
      >
        <Search />
        {content}
      </Box>
    </ThemeProvider>
  );
}

export default App;
