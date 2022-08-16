import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Tooltip,
  Typography,
} from '@mui/material';
import background from '../images/background.jpg';
import { Menu, Search as SearchIcon } from '@mui/icons-material';
import React from 'react';

const Search = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchBy, setSearchBy] = React.useState('intitle');

  let by;
  switch (searchBy) {
    case 'intitle':
      by = 'Title';
      break;
    case 'inauthor':
      by = 'Author';
      break;
    case 'inpublisher':
      by = 'Publisher';
      break;
    case 'isbn':
      by = 'ISBN';
  }

  const handlePop = (e, placement) => {
    setOpen((prev) => !prev);
    setAnchorEl(e.currentTarget);
    setPlacement(placement);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (term) => {
    setOpen((prev) => !prev);
    setSearchBy(term);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <Box>
      <Paper
        sx={{
          background: `url(${background}) `,
          backgroundSize: 'auto 180px',
          width: '100vw',
          height: 175,
        }}
      />
      <Paper
        component='form'
        sx={{
          p: 1,
          display: 'flex',
          position: 'relative',
          bottom: '30px',
          alignItems: 'center',
          width: { xs: '80%', sm: '50%' },
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <Tooltip title='Search By...' placement='top'>
          <IconButton onClick={(e) => handlePop(e, 'bottom-start')}>
            <Menu />
          </IconButton>
        </Tooltip>
        <Divider orientation='vertical' sx={{ height: 30, m: '0 10px' }} />
        <InputBase
          fullWidth
          placeholder={`Search Books by ${by}...`}
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          autoFocus
        />
        <Divider orientation='vertical' sx={{ height: 30, m: '0 10px' }} />
        <Button
          color='primary'
          variant='contained'
          startIcon={<SearchIcon />}
          type='submmit'
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          Search
        </Button>

        <Tooltip title='Search' sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton type='submit'>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Paper>

      <Popper open={open} anchorEl={anchorEl} placement={placement}>
        <Paper>
          <List>
            <ListItemButton onClick={() => handleSelect('intitle')}>
              <ListItemText primary='Title' />
            </ListItemButton>
            <Divider variant='middle' />
            <ListItemButton onClick={() => handleSelect('inauthor')}>
              <ListItemText primary='Author' />
            </ListItemButton>
            <ListItemButton onClick={() => handleSelect('inpublisher')}>
              <ListItemText primary='Publisher' />
            </ListItemButton>
            <Divider variant='middle' />
            <ListItemButton onClick={() => handleSelect('isbn')}>
              <ListItemText primary='ISBN' />
            </ListItemButton>
          </List>
        </Paper>
      </Popper>
    </Box>
  );
};

export default Search;
