import { Container, Typography, Grid } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Yummy is a modern restaurant offering a fusion of flavors and a cozy ambiance.
            Our chefs craft each dish with passion and creativity.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/assets/about.jpg" alt="About" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
      </Grid>
    </Container>
  );
}