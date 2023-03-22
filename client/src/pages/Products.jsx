import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api_URL = import.meta.env.VITE_API_URL;

function Products() {
  const [phonesList, setPhonesList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getPhones = async () => {
    try {
      const response = await axios.get(`${api_URL}/phones`);
      setPhonesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhones();
    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
      {isFetching ? (
        <CircularProgress sx={{ mt: 20 }} />
      ) : (
        <>
          <Typography variant="h3" sx={{ mb: 3 }}>
            The phone cave
          </Typography>
          <Box className="media-break" sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {phonesList.map((phone) => (
              <Card className="card-landing" sx={{ maxWidth: "30%", height: 500 }} key={phone.id}>
                <Stack height="50%">
                  <img className="landing" src={`../images/${phone.imageFileName}`} alt={phone.name} />
                </Stack>
                <Divider sx={{ mx: 3 }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "50%",
                    p: 2,
                    boxSizing: "border-box",
                  }}
                >
                  <CardContent>
                    <Stack direction="row" sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="h6">
                        {phone.manufacturer} {phone.name}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {phone.price}€
                      </Typography>
                    </Stack>
                    <Typography className="description" variant="body1">
                      {phone.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/${phone.id}`}>
                      <Button variant="outlined">Show details</Button>
                    </Link>
                  </CardActions>
                </Box>
              </Card>
            ))}
          </Box>
        </>
      )}
    </Container>
  );
}

export default Products;
