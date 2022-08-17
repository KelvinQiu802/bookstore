import { Box, Divider, Switch, Typography } from '@mui/material';
import BookCard from '../BookCard/BookCard';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { LightMode } from '@mui/icons-material';
import { toggleMode } from '../BookList/BookListSlice';
import BookCardMini from '../BookCard/BookCardMini';
import { useTheme, useMediaQuery } from '@mui/material';

const BookList = () => {
  const dataList = useSelector((state) => state.search.books.items);
  const amountOfResults = useSelector((state) => state.search.books.totalItems);
  const themeMode = useSelector((state) => state.booklist.mode);
  const dispatch = useDispatch();

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        width: { xs: '85%', sm: '70%' },
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: 0.5,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography color='text.secondary' sx={{ ml: 1 }}>
          {amountOfResults} Results
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LightMode sx={{ color: 'text.primary' }} />
          <Switch
            color='warning'
            checked={themeMode === 'dark'}
            onChange={() => dispatch(toggleMode())}
          />
        </Box>
      </Box>
      {dataList ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {dataList.map((data) => {
            if (desktop) {
              return <BookCard key={nanoid()} data={data} />;
            } else {
              return <BookCardMini key={nanoid()} data={data} />;
            }
          })}
        </Box>
      ) : (
        <Typography variant='h4' fontWeight={500} color='text.primary'>
          Nothing Found
        </Typography>
      )}
    </Box>
  );
};

export default BookList;
