import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container
      sx={{
        // height: "550px",
        backgroundColor: "#CFFF8D",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px",
        color: "#C70039",
      }}
    >
      <Grid
        Container
        rowSpacing={"50px"}
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        <Grid sx={{ fontSize: "50px", color: "#111D5E" }}>
          Contact{" "}
          <span
            style={{
              fontSize: "35px",
            }}
          >
            us
          </span>
        </Grid>
        <hr />
        <Grid sx={{ padding: "10px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "normal",
              fontStyle: "italic",
              color: "#111D5E",
            }}
          >
            Door No:
          </span>{" "}
          3/250, South Street, Arumugampatti
          <Grid sx={{ padding: "10px" }}>
            Vickramasingapuram{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                fontStyle: "italic",
                color: "#111D5E",
              }}
            >
              (Post)
            </span>{" "}
            Ambasamudram{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                fontStyle: "italic",
                color: "#111D5E",
              }}
            >
              (Taluk)
            </span>
          </Grid>
          <Grid sx={{ padding: "10px" }}>
            Tirunelveli{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                fontStyle: "italic",
                color: "#111D5E",
              }}
            >
              (Distric)
            </span>
          </Grid>
          <Grid sx={{ padding: "10px" }}>Tamilnadu - 627425</Grid>
        </Grid>
        <Grid sx={{ padding: "10px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "normal",
              fontStyle: "italic",
              color: "#111D5E",
            }}
          >
            Phone Number:{" "}
          </span>
          <span>8608464647</span>
        </Grid>
        <Grid sx={{ padding: "10px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "normal",
              fontStyle: "italic",
              color: "#111D5E",
            }}
          >
            E-mail id:{" "}
          </span>
          <span style={{ textDecoration: "underline" }}>
            chandiran2824@gmail.com
          </span>
        </Grid>
        <Grid sx={{ padding: "10px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "normal",
              fontStyle: "italic",
              color: "#111D5E",
            }}
          >
            Passport Number:{" "}
          </span>
          <span>U8770860</span>
        </Grid>
        <Grid></Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
