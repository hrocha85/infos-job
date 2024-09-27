import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      bgcolor="#f5f5f5"
      p={3}
    >
      <Typography variant="h1" fontWeight="bold" color="primary" gutterBottom>
        404
      </Typography>

      <Typography variant="h5" color="textSecondary" gutterBottom>
        Page Not Found
      </Typography>

      <Typography variant="body1" color="textSecondary" mb={4}>
        Sorry, the page you are looking for does not exist or has been moved.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="/"
        size="large"
        sx={{ textTransform: "none" }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
