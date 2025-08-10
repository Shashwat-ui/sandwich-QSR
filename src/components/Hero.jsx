import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{
      height: '80vh',
      backgroundImage: 'url(/assets/hero.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <Typography variant="h2">Welcome to Yummy</Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>Delicious food crafted with love</Typography>
      <Button variant="contained" color="secondary">Book a Table</Button>
    </Box>
  );
}
