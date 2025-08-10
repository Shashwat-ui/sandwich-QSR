import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="body2">© 2025 Yummy Restaurant. All rights reserved.</Typography>
    </Box>
  );
}