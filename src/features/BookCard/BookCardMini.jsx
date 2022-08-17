import { MenuBook } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

const BookCardMini = ({ data }) => {
  return (
    <Card
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        position: 'relative',
        right: 8,
        gap: 3,
      }}
      variant='outlined'
    >
      {data.volumeInfo.imageLinks ? (
        <CardMedia
          component='img'
          image={data.volumeInfo.imageLinks.smallThumbnail}
          sx={{
            width: { xs: '60px', sm: '70px' },
            maxHeight: 150,
            borderRadius: 1,
          }}
        />
      ) : (
        <Skeleton
          variant='rounded'
          animation={false}
          sx={{
            width: { xs: '60px', sm: '70px' },
            height: '100px',
          }}
        />
      )}
      <Box sx={{ mr: 'auto' }}>
        <Typography
          variant='p'
          component='a'
          href={data.volumeInfo.infoLink}
          target='_blank'
          sx={{
            color: 'text.primary',
            ':hover': { color: 'primary.dark' },
            lineHeight: 1.2,
            fontWeight: 500,
          }}
        >
          {data.volumeInfo.title}
        </Typography>
        <CardContent sx={{ p: 0, mt: 0.5 }}>
          {data.volumeInfo.authors && (
            <Typography variant='span' color='text.secondary'>
              {data.volumeInfo.authors[0]}
            </Typography>
          )}
          {data.volumeInfo.authors?.length > 1 && (
            <Typography variant='span' color='text.secondary' sx={{ ml: 0.8 }}>
              Et al.
            </Typography>
          )}
          {data.volumeInfo.publisher && (
            <Typography variant='span' color='text.secondary' sx={{ ml: 2 }}>
              ({data.volumeInfo.publisher})
            </Typography>
          )}
          {data.volumeInfo.publishedDate && (
            <Typography variant='span' color='text.secondary' sx={{ ml: 2 }}>
              {data.volumeInfo.publishedDate}
            </Typography>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookCardMini;
