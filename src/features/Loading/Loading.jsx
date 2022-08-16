import { Box, LinearProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box>
      <LinearProgress
        sx={{ width: { xs: '80%', sm: '60%' }, margin: '0 auto' }}
      />
    </Box>
  );
};

export default Loading;
