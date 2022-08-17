import { Box, Divider, Switch, Typography } from '@mui/material';
import BookCard from '../BookCard/BookCard';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { LightMode } from '@mui/icons-material';
import { toggleMode } from '../BookList/BookListSlice';

const BookList = () => {
  const dataList = useSelector((state) => state.search.books.items);
  const amountOfResults = useSelector((state) => state.search.books.totalItems);
  const themeMode = useSelector((state) => state.booklist.mode);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '70%' },
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
          {dataList.map((data) => (
            <BookCard key={nanoid()} data={data} />
          ))}
        </Box>
      ) : (
        <h1>Nothing Found</h1>
      )}
    </Box>
  );
};

export default BookList;
