import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InsightsIcon from "@mui/icons-material/Insights";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SendIcon from "@mui/icons-material/Send";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function BasicCard() {
  return (
    <div
      style={{
        margin: "20px 0 50px 0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFFD8C",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Grid container columnSpacing={10} spacing={5}>
        <Grid item xs={12} lg={12}>
          <Typography
            variant="h5"
            color={"primary"}
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{ textDecoration: "underline", color: "#6528F7" }}
          >
            The world's most popular currency tools
          </Typography>
        </Grid>

        <Grid item sm={12} lg={4}>
          <Card sx={{ minWidth: 275, py: 1, textAlign: "center" }}>
            <CardContent>
              <SendIcon sx={{ padding: "10px", fontSize: "140px" }} />
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={"primary"}
                component="div"
              >
                Xe International Money Transfer
              </Typography>
              <Typography sx={{ padding: "15px" }} variant="body2">
                Send money online fast, secure and easy. Live tracking and
                notifications + flexible delivery and payment options
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button variant="outlined" size="medium">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={12} lg={4}>
          <Card sx={{ minWidth: 275, py: 1, textAlign: "center" }}>
            <CardContent>
              <InsightsIcon sx={{ padding: "10px", fontSize: "150px" }} />
              <Typography
                variant="h5"
                color={"primary"}
                fontWeight={"bold"}
                component="div"
              >
                Xe Currency Charts
              </Typography>
              <Typography sx={{ p: 1 }} variant="body2">
                Create a chart for any currency pair in the world to see their
                currency history. These currency charts use live mid-market
                rates, are easy to use, and are very reliable
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button variant="outlined" size="medium">
                View charts
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={12} lg={4}>
          <Card sx={{ minWidth: 275, py: 1, textAlign: "center" }}>
            <CardContent>
              <NotificationsActiveOutlinedIcon
                sx={{ fontSize: "150px", padding: "10px" }}
              />
              <Typography
                variant="h5"
                color={"primary"}
                fontWeight={"bold"}
                component="div"
              >
                Xe Rate Alerts
              </Typography>
              <Typography sx={{ p: 1 }} variant="body2">
                Need to know when a currency hits a specific rate? The Xe Rate
                Alerts will let you know when the rate you need is triggered on
                your selected currency pairs.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button variant="outlined" size="medium">
                Ceate alert
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicCard;
