import {
  Stack,
  Box,
  createTheme,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import Search from './features/Search/Search';
import Loading from './features/Loading/Loading';
import BookList from './features/BookList/BookList';
import { useSelector } from 'react-redux';
import { Wifi } from '@mui/icons-material';

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
      content = (
        <Stack alignItems='center'>
          <Typography variant='h6'>Request Failed</Typography>
          <Wifi color='error' />
          <Typography variant='p' sx={{ mt: 1 }}>
            This site is using Google Book API
          </Typography>
          <Typography variant='p' sx={{ mt: 1 }}>
            Please check your network connect.
          </Typography>
        </Stack>
      );
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
