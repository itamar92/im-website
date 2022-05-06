import React from "react";
import TableFooter from "@mui/material/TableFooter";
import { Container, Grid, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="midnightblue" color="white" fontWeight="300">
        <Container maxWidth="lg">
          <Grid
            justifyContent="center"
            container
            spacing={5}
            style={{ paddingBottom: "24px" }}
          >
            <Box borderBottom={1} textAlign="center" pt={{ xs: 3, sm: 3 }}>
              Developet By Itamar Miron Using React Native &reg;{" "}
              {new Date().getFullYear()}
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
