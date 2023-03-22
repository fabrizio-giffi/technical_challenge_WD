import { Box, Button, Card, CircularProgress, Container, Divider, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const api_URL = import.meta.env.VITE_API_URL;

function PhoneDetails() {
  const [phone, setPhone] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();

  const getPhone = async () => {
    try {
      const response = await axios.get(`${api_URL}/phones/${id}`);
      console.log(response.data);
      setPhone(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhone();
    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  }, []);

  console.log(phone);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
      {isFetching ? (
        <CircularProgress sx={{ mt: 20 }} />
      ) : (
        <Card className="media-break" sx={{ display: "flex", maxWidth: "100%" }}>
          <Box minWidth="50%">
            <img className="details" src={`../images/${phone.imageFileName}`} alt={phone.name} />
          </Box>
          <Box sx={{ minWidth: "50%", boxSizing: "border-box", p: 3 }}>
            <Typography variant="h4">
              {phone.manufacturer} - {phone.name}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" sx={{ mb: 1 }}>
              Description
            </Typography>
            <Typography variant="body1">{phone.description}</Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" sx={{ mb: 1 }}>
              Technical details
            </Typography>
            <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="overline" minWidth="20%">
                Display:
              </Typography>
              <Typography variant="body1" sx={{ ml: 1 }}>
                {phone.screen}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="overline" minWidth="20%">
                Processor:
              </Typography>
              <Typography variant="body1" sx={{ ml: 1 }}>
                {phone.processor}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="overline" minWidth="20%">
                Memory:
              </Typography>
              <Typography variant="body1" sx={{ ml: 1 }}>
                {phone.ram}GB
              </Typography>
            </Stack>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" sx={{ mb: 1 }}>
              Available in
            </Typography>
            <Stack direction="row">
              <Button variant="outlined">
                <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
                  {phone.color} -
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, ml: 1 }}>
                  {phone.price}€
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Card>
      )}
    </Container>
  );
}

export default PhoneDetails;
