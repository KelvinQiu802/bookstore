import { Box, Divider, Typography } from '@mui/material';
import BookCard from '../BookCard/BookCard';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

const BookList = () => {
  const dataList = useSelector((state) => state.search.books.items);
  const amountOfResults = useSelector((state) => state.search.books.totalItems);

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '70%' },
        margin: '0 auto',
      }}
    >
      <Box sx={{ display: 'flex', mb: 0.5 }}>
        <Typography color='text.secondary' sx={{ ml: 1 }}>
          {amountOfResults} Results
        </Typography>
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
