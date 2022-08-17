import { MenuBook } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

const BookCard = ({ data }) => {
  console.log(data);
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
      <CardMedia
        component='img'
        image={data.volumeInfo.imageLinks.smallThumbnail}
        sx={{
          width: { xs: '90px', sm: '70px' },
          maxHeight: 200,
          borderRadius: 1,
        }}
      />
      <Box sx={{ mr: 'auto' }}>
        <Typography
          variant='h6'
          component='a'
          href={data.volumeInfo.infoLink}
          target='_blank'
          sx={{ color: 'text.primary', ':hover': { color: 'primary.dark' } }}
        >
          {data.volumeInfo.title}
        </Typography>
        <CardContent sx={{ p: 0 }}>
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

const mock = {
  kind: 'books#volume',
  id: 'oo26Kw9c2W4C',
  etag: 'pMz9F3UyQQQ',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/oo26Kw9c2W4C',
  volumeInfo: {
    title: 'Practical JavaScript, DOM Scripting and Ajax Projects',
    authors: ['Frank Zammetti', 'Kelvin Qiu'],
    publisher: 'Apress',
    publishedDate: '2007-09-08',
    description:
      'This "learn by example" book offers 10 complete JavaScript projects that will save web developers countless hours of development time. These projects can serve as samples to learn from and/or be adapted for use in other projects. The 10 projects all address common needs in modern web applications, including a utility library, a validation framework, a GUI widget framework, a dynamic event calendar application, a drag and drop shopping cart, and more! Coverage details JavaScript best practices, Ajax techniques, and some of the most popular JavaScript libraries, such as Prototype, Script.aculo.us, and the Yahoo YUI library.',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9781430201977',
      },
      {
        type: 'ISBN_10',
        identifier: '1430201975',
      },
    ],
    readingModes: {
      text: true,
      image: true,
    },
    pageCount: 576,
    printType: 'BOOK',
    categories: ['Computers'],
    averageRating: 5,
    ratingsCount: 2,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: '3.4.4.0.preview.3',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=oo26Kw9c2W4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=oo26Kw9c2W4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com.hk/books?id=oo26Kw9c2W4C&pg=PA239&dq=javascript+intitle&hl=&cd=1&source=gbs_api',
    infoLink:
      'http://books.google.com.hk/books?id=oo26Kw9c2W4C&dq=javascript+intitle&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/Practical_JavaScript_DOM_Scripting_and_A.html?hl=&id=oo26Kw9c2W4C',
  },
  saleInfo: {
    country: 'HK',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'HK',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.com.hk/books/download/Practical_JavaScript_DOM_Scripting_and_A-sample-epub.acsm?id=oo26Kw9c2W4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    pdf: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.com.hk/books/download/Practical_JavaScript_DOM_Scripting_and_A-sample-pdf.acsm?id=oo26Kw9c2W4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=oo26Kw9c2W4C&hl=&printsec=frontcover&source=gbs_api',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'It shows three \u003cb\u003eJavaScript\u003c/b\u003e classes: one class represents a collection of movies, another represents an individual movie, and the third represents an actor. ... setTitle = function(\u003cb\u003einTitle\u003c/b\u003e) { this.title = \u003cb\u003einTitle\u003c/b\u003e; } Movie.prototype.',
  },
};
