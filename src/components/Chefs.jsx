import { Container, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';

const chefs = [
  { name: 'Chef Arjun', specialty: 'Indian Fusion', img: '/assets/chef1.jpg' },
  { name: 'Chef Maya', specialty: 'Pastry & Desserts', img: '/assets/chef2.jpg' },
];

export default function Chefs() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Meet Our Chefs</Typography>
      <Grid container spacing={3}>
        {chefs.map((chef, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar src={chef.img} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                <Typography variant="h6">{chef.name}</Typography>
                <Typography variant="body2">{chef.specialty}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}