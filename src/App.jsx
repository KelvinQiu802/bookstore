import { Box } from '@mui/material';
import './App.css';
import Search from './features/Search/Search';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Box className='App'>
        <Search />
      </Box>
    </Provider>
  );
}

export default App;
