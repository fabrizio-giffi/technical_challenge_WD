import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "end" }}>
        <Link to={"/"}>
          <Button variant="text" sx={{ color: "black", fontWeight: 600 }}>
            All products
          </Button>
        </Link>
      </Container>
    </nav>
  );
}

export default NavBar;
