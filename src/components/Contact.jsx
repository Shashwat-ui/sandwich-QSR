import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" required />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>
    </Container>
  );
}