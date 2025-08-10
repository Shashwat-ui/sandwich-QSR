import { Container, Grid } from '@mui/material';

const images = ['/assets/gallery1.jpg', '/assets/gallery2.jpg', '/assets/gallery3.jpg'];

export default function Gallery() {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={2}>
        {images.map((src, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <img src={src} alt={`Gallery ${i}`} style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}