import * as React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import { Box, Card, Typography } from "@mui/material";

function Mslider() {
  return (
    <Box
      sx={{
        marginBottom: "30px",
        border: "2px solid blue",
        // backgroundColor: "yellow",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
        {times(1, Number).map(() => (
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              borderRadius: "10px",
              color: "blue",
            }}
          >
            முயற்சி திருவினையாக்கும்
          </Typography>
        ))}
      </Marquee>
    </Box>
  );
}

export default Mslider;
