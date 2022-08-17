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

const BookCard = ({ data }) => {
  return (
    <Card
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        gap: 3,
      }}
      variant='outlined'
    >
      {data.volumeInfo.imageLinks ? (
        <CardMedia
          component='img'
          image={data.volumeInfo.imageLinks.smallThumbnail}
          sx={{
            width: { xs: '90px', sm: '70px' },
            maxHeight: 200,
            borderRadius: 1,
          }}
        />
      ) : (
        <Skeleton
          variant='rounded'
          animation={false}
          sx={{
            width: { xs: '90px', sm: '70px' },
            height: '100px',
          }}
        />
      )}
      <Box sx={{ mr: 'auto' }}>
        <Typography
          variant='h6'
          component='a'
          href={data.volumeInfo.infoLink}
          target='_blank'
          sx={{
            color: 'text.primary',
            ':hover': { color: 'primary.dark' },
            lineHeight: 1.2,
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
        <Stack direction='row' spacing={1} sx={{ mt: 1 }}>
          {data.volumeInfo.categories && (
            <Chip
              label={data.volumeInfo.categories[0]}
              size='small'
              variant='outlined'
              color='primary'
            />
          )}
          {data.volumeInfo.pageCount && (
            <Chip
              label={'Page: ' + data.volumeInfo.pageCount}
              size='small'
              variant='outlined'
              color='warning'
            />
          )}
          {data.volumeInfo.industryIdentifiers && (
            <Chip
              label={
                'ISBN: ' + data.volumeInfo.industryIdentifiers[0].identifier
              }
              size='small'
              variant='outlined'
              color='success'
            />
          )}
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Stack direction='row'>
          <Rating
            readOnly
            value={data.volumeInfo.averageRating}
            precision={0.5}
            sx={{ mt: 0.5 }}
          />
          <Typography variant='span' sx={{ mt: 1, mr: 2, ml: 1 }}>
            ({data.volumeInfo.ratingsCount || '0'})
          </Typography>
        </Stack>
        <Button
          variant='outlined'
          sx={{ width: '80%' }}
          startIcon={<MenuBook />}
          href={data.volumeInfo.previewLink}
          target='_blank'
        >
          PREVIEW
        </Button>
      </Box>
    </Card>
  );
};

export default BookCard;
