import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const navItems = ['Home', 'About', 'Menu', 'Events', 'Chefs', 'Gallery', 'Contact'];

export default function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Yummy</Typography>
        {navItems.map(item => (
          <Button key={item} color="inherit">{item}</Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}