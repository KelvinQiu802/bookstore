import { Box } from '@mui/material';
import BookCard from '../BookCard/BookCard';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

const BookList = () => {
  const dataList = useSelector((state) => state.search.books.items);

  return (
    <>
      {dataList ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {dataList.map((data) => (
            <BookCard key={nanoid()} data={data} />
          ))}
        </Box>
      ) : (
        <h1>Nothing Found</h1>
      )}
    </>
  );
};

export default BookList;
