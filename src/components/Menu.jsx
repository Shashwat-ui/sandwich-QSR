import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const menuItems = [
  { title: 'Grilled Salmon', description: 'Lemon butter sauce', price: '$18' },
  { title: 'Caesar Salad', description: 'Romaine & parmesan', price: '$10' },
  { title: 'Pasta Alfredo', description: 'Creamy garlic sauce', price: '$14' },
];

export default function Menu() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Our Menu</Typography>
      <Grid container spacing={3}>
        {menuItems.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}