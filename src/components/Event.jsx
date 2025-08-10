import { Container, Typography, Card, CardContent } from '@mui/material';

const events = [
  { title: 'Wine Tasting Night', date: 'Aug 20', description: 'Explore fine wines with our sommelier.' },
  { title: 'Live Jazz Dinner', date: 'Sep 5', description: 'Enjoy dinner with live jazz music.' },
];

export default function Events() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Upcoming Events</Typography>
      {events.map((event, i) => (
        <Card key={i} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{event.title}</Typography>
            <Typography variant="subtitle2">{event.date}</Typography>
            <Typography variant="body2">{event.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}