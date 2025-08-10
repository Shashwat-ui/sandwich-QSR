import { Container, Paper, Typography } from '@mui/material';

const testimonials = [
  { name: 'Ami', quote: 'Absolutely loved the ambiance and food!' },
  { name: 'Ravi', quote: 'A delightful experience from start to finish.' },
];

export default function Testimonials() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Testimonials</Typography>
      {testimonials.map((t, i) => (
        <Paper key={i} sx={{ p: 3, mb: 2 }}>
          <Typography variant="body1">"{t.quote}"</Typography>
          <Typography variant="subtitle2" align="right">— {t.name}</Typography>
        </Paper>
      ))}
    </Container>
  );
}