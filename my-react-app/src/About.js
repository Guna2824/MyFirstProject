import React from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";
import Guna from "./images/Guna.jpg";

function About() {
  return (
    <Grid
      container
      sx={{
        border: "2px solid transparent",
        backgroundColor: "#C3ACD0",
        borderRadius: "10px",
        minHeight: "520px",
        maxHeight: "auto",
        backgroundSize: "cover",
        // position: "absolute",
      }}
    >
      <Grid
        item
        xs={12}
        lg={6}
        variant="div"
        color={"#3A3845"}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h5" color={"#3A3845"}>
          I am
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold ", fontSize: "50px" }}>
          P.Gunachandran
        </Typography>
        <Typography variant="h6" color={"#3A3845"}>
          Fullstack Web Developer
        </Typography>
        <Typography variant="p" textAlign={"center"}>
          To seek a challenging career, to utilize my skills In serving the
          organization to my best known Knowledge and to play an inventive and
          active Role in the organization. To achieve professional excellence
          with the best utilization of my knowledge, potential and skills
          thereby contributing my best toward the field.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            background: "#FFB534",
            border: "solid transparent",
            marginTop: "10px",
          }}
        >
          Contact
        </Button>
      </Grid>
      <img
        style={{
          height: "400px",
          width: "350px",
          borderRadius: "50%",
          position: "relative",
          top: "60px",
          left: "80px",
        }}
        src={Guna}
      />
    </Grid>
  );
}

export default About;
