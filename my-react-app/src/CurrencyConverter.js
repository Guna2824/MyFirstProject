import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { Container, Slider, Typography } from "@mui/material";
import BasicCard from "./BasicCard";
import Mslider from "./Slider";
import Contact from "./Contact";

function CurrencyConverter() {
  const [user, setUser] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [result, setResult] = useState("");
  const [clickResult, setClickResult] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const country = Object.entries(user);

  // console.log(user);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.frankfurter.app/currencies");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchConversionRates = async () => {
      const host = "api.frankfurter.app";
      try {
        const response = await fetch(
          `https://${host}/latest?amount=${input3}&from=${input1}&to=${input2}`
        );
        const data = await response.json();
        setResult(Object.values(data.rates));
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      }
    };

    fetchConversionRates();
  }, [input1, input2, input3]);

  const buttonClick = () => {
    if (input1 === input2) {
      setErrorMsg(
        <Alert variant="filled" severity="error">
          Reset & select different currencies
        </Alert>
      );
    } else if (input3 < 1 || input3 == null) {
      setErrorMsg(
        <Alert variant="filled" severity="error">
          Reset & Enter corret amount
        </Alert>
      );
    } else {
      setClickResult(result);
    }
  };

  const resetClick = () => {
    setInput1("");
    setInput2("");
    setInput3("");
    setResult("");
    setClickResult("");
    setErrorMsg("");
  };

  return (
    <Container>
      <Mslider />
      <div
        style={{
          marginBottom: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* currency converter card  */}
        <Box
          sx={{
            mt: 2,
            p: 2,
            width: "500px",
            border: "2px solid transparent",
            boxShadow: "2px 2px 15px 8px rgba(0,0,0,0.2)",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <Typography
                py={"5px"}
                variant="h4"
                fontWeight={"bold"}
                align="center"
                color={"primary"}
                fontFamily={"Roboto"}
              >
                CURRENCY CONVERTER
                <Typography py={1} color={"#1b5e20"} fontWeight={"bold"}>
                  Check live foreign currency exchange rates
                </Typography>
              </Typography>
            </Grid>

            <Grid container spacing={2} item xs={12} lg={12}>
              <Grid item xs={6} lg={6}>
                <FormControl sx={{ display: "inline" }}>
                  <InputLabel id="demo-simple-select-label">
                    {"country 1"}
                  </InputLabel>
                  <Select
                    sx={{ display: "inline" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={input1}
                    label="Country 1"
                    onChange={(e) => setInput1(e.target.value)}
                  >
                    {country.map((name) => (
                      <MenuItem value={name[0]}>{name[1]}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6} lg={6}>
                <FormControl sx={{ display: "inline" }}>
                  <InputLabel id="demo-simple-select-label">
                    {"country 2"}
                  </InputLabel>
                  <Select
                    sx={{ display: "inline" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={input2}
                    label="Country 2"
                    onChange={(e) => setInput2(e.target.value)}
                  >
                    {country.map((name) => (
                      <MenuItem value={name[0]}>{name[1]}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {errorMsg && (
                <Grid item xs={12} lg={12}>
                  {errorMsg}
                </Grid>
              )}

              <Grid item xs={12} lg={6}>
                <TextField
                  sx={{ width: "100%" }}
                  type="number"
                  onChange={(e) => setInput3(e.target.value)}
                  value={input3}
                  placeholder="Enter amount"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  sx={{ width: "100%" }}
                  value={clickResult}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} item xs={12} lg={12}>
              <Grid item xs={6} lg={6}>
                <Button
                  sx={{ display: "inline", width: "100%" }}
                  variant="contained"
                  onClick={buttonClick}
                >
                  Convert
                </Button>
              </Grid>
              <Grid item xs={6} lg={6}>
                <Button
                  sx={{ display: "inline", width: "100%" }}
                  variant="contained"
                  onClick={resetClick}
                >
                  <RotateLeftIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Grid>
        <BasicCard />
      </Grid>
      <Contact />
    </Container>
  );
}

export default CurrencyConverter;
