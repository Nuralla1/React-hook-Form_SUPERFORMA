import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MainContainer from "../components/MainContainer";

import { useDataContext } from "../context/DataContext";

const Result = () => {
  const { data } = useDataContext();
  const [success, setSuccess] = useState(false);
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }
    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });
    console.log(formData);
    // const res = await fetch("", {
    //     method: "POST",
    //     body: formData
    // })
    Swal.fire("Great job!", "You are the best!", "success");
    setSuccess(true);
  };
  if (success) {
    return <Confetti />;
  }

  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        Result
      </Typography>
      <TableContainer sx={{ mb: "30px" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <>
                <TableRow key={entry[0]}>
                  <TableCell>{entry[0]}</TableCell>
                  <TableCell align="right">{entry[1]}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component={"h2"} variant="h5">
            Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={f.name}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ my: 2 }}
        onClick={onSubmit}
      >
        Submit
      </Button>
      <Link to="/">Start over</Link>
    </MainContainer>
  );
};

export default Result;
