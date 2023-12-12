import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function News() {
  const [user, setUser] = useState([]);

  // const articles = user.map((item) => item.articles);
  // const author = user.map((item) => item.articles.map((key) => key.author));
  // const description = user.map((item) =>
  //   item.articles.map((key) => key.description)
  // );

  // console.log(author);

  const update = new Date();
  let date = update.getDate() - 2;
  let month = update.getMonth() + 1;
  let year = update.getFullYear();

  if (date < 10) {
    date = "0" + date;
  } else {
    date = date;
  }
  if (month < 10) {
    month = "0" + month;
  } else {
    month = month;
  }

  const currDate = year + "-" + month + "-" + date;
  console.log(currDate);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Apple&from={currDate}&sortBy=popularity&apiKey=29ff103fba8a4f7c9adcd5638c1e239b"
        );
        const data = await response.json();
        // const data = await res;
        setUser([data]);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <Box>
      <Grid
        item
        xs={12}
        sx={{
          height: "100px",
          backgroundPositionX: "center",
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/Logo_Daily_Mail.svg/1280px-Logo_Daily_Mail.svg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginBottom: "20px",
        }}
      ></Grid>
      {user.map((key) =>
        key.articles.map((item) => (
          <Typography p={2} sx={{ backgroundColor: "#FFE382" }}>
            <Card sx={{ p: "15px" }}>
              <Grid
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "blue",
                  fontSize: "20px",
                }}
              >
                {item.title}
              </Grid>
              <br />
              <Grid
                style={{
                  color: "green",
                  textAlign: "right",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {item.author}
                <br />
                <span style={{ color: "gray", fontStyle: "normal" }}>
                  {currDate}
                </span>
              </Grid>
              <br />
              <Grid>{item.description}</Grid>
            </Card>
          </Typography>
        ))
      )}
    </Box>
  );
}

export default News;
