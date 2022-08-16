import {
  Box,
  Divider,
  Fade,
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

  const handlePop = (e, placement) => {
    setOpen((prev) => !prev);
    setAnchorEl(e.currentTarget);
    setPlacement(placement);
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
      >
        <Tooltip title='Search By...'>
          <IconButton onClick={(e) => handlePop(e, 'bottom-start')}>
            <Menu />
          </IconButton>
        </Tooltip>
        <Divider orientation='vertical' sx={{ height: 30, m: '0 10px' }} />
        <InputBase
          fullWidth
          placeholder='Search a Book by Title...'
          autoFocus
        />
        <Divider orientation='vertical' sx={{ height: 30, m: '0 10px' }} />
        <Tooltip title='Search'>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Paper>

      <Popper open={open} anchorEl={anchorEl} placement={placement}>
        <Paper>
          <List>
            <ListItemButton>
              <ListItemText primary='Title' />
            </ListItemButton>
            <Divider variant='middle' />
            <ListItemButton>
              <ListItemText primary='Author' />
            </ListItemButton>
            <Divider variant='middle' />
            <ListItemButton>
              <ListItemText primary='ISBN' />
            </ListItemButton>
          </List>
        </Paper>
      </Popper>
    </Box>
  );
};

export default Search;
