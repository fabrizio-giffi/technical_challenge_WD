import { Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
      <Typography variant="h3">404 page not found.</Typography>
    </Container>
  );
}

export default NotFound;
