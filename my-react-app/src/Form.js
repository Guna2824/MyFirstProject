import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [person, setPerson] = useState({});
  console.log(name, person);

  function Add() {
    setPerson((person.key = { name, email, mobile }));
    setName("");
    setEmail("");
    setMobile("");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <h1>Form</h1>
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          Width={300}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          Width={300}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="tel"
          label="Mobile"
          variant="outlined"
          Width={300}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={Add}>
          Submit
        </Button>
      </div>

      <p style={{ textAlign: "center" }}>
        {person.name}
        <br />
        {person.email}
        <br />
        {person.mobile}
        <br />
      </p>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">E-Mail</TableCell>
              <TableCell align="right">Mobile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{person.name}</TableCell>
              <TableCell align="right">{person.email}</TableCell>
              <TableCell align="right">{person.mobile}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
