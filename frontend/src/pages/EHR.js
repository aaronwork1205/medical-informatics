import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import { Card } from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  duration,
} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import data from "./data.js";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#9146D8",
    },
    secondary: {
      main: "#D9D9D9",
    },
  },
});

const EHR = () => {
  const [familyName, setFamilyName] = useState(
    data.entry[0].resource.name[0].family
  );
  const [givenName, setGivenName] = useState(
    data.entry[0].resource.name[0].given
  );
  const [gender, setGender] = useState(data.entry[0].resource.gender);
  const [age, setAge] = useState(data.entry[0].resource.birthDate);

  const handleClick = () => {};

  return (
    <ThemeProvider theme={buttonTheme}>
      <Box sx={styles.column}>
        <Typography sx={styles.title}>AI Diagnose</Typography>
        <Box sx={styles.row}>
          <MenuList>
            <MenuItem sx={styles.menu}>
              <Card sx={styles.card}>
                <Box sx={{ ...styles.row, justifyContent: "wrap" }}>
                  <Typography sx={styles.menuText}>
                    {givenName.toString().replace(/\d/g, "")}
                  </Typography>
                  <Typography sx={styles.menuText}>
                    {familyName.toString().replace(/\d/g, "")}
                  </Typography>
                </Box>
                <Typography sx={styles.menuText}>{age}</Typography>
                <Typography sx={styles.menuText}>{gender}</Typography>
              </Card>
            </MenuItem>
            <Divider />
          </MenuList>
          <Divider orientation="vertical" color="primary" flexItem />
          <Box sx={styles.inputArea}>
            <Box sx={(styles.row, styles.right)}>
              <Card sx={styles.info}>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>Patient Info</Typography>
                  <Box sx={{ ...styles.row, justifyContent: "wrap" }}>
                    <Typography sx={styles.text}>
                      Name: {givenName.toString().replace(/\d/g, "")}
                    </Typography>
                    <Typography sx={styles.text}>
                      {familyName.toString().replace(/\d/g, "")}
                    </Typography>
                    <Typography sx={styles.text}>Birth Date: {age}</Typography>
                    <Typography sx={styles.text}>Gender: {gender}</Typography>
                  </Box>
                </Card>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>Lab Test</Typography>
                  <Box sx={{ ...styles.row, justifyContent: "wrap" }}></Box>
                </Card>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>AI Diagnose</Typography>
                  <Box sx={{ ...styles.row, justifyContent: "wrap" }}></Box>
                </Card>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>Doctor Diagnose</Typography>
                  <Box sx={{ ...styles.row, justifyContent: "wrap" }}></Box>
                </Card>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const styles = {
  column: {
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    height: "10vw",
    width: "20vw",
    fontSize: "calc(1.5em + 0.5vw)",
    margin: "2vh",
  },
  btnNext: {
    height: "5vh",
    width: "10vw",
    fontSize: "calc(1em + 0.5vw)",
    margin: "1vh",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  title: {
    fontSize: "calc(3em + 0.5vw)",
    fontWeight: "bold",
    color: "#4FA3F8F9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "4vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "1vw",
    justifyContent: "center",
    alignItem: "center",
  },
  inputArea: {
    width: "80%",
    margin: "1%",
  },
  menu: {
    height: "auto",
    width: "20vw",
  },
  menuText: {
    fontWeight: "bold",
    fontSize: 32,
    color: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 32,
    color: "Black",
  },
  card: {
    height: "100%",
    width: "100%",
    backgroundColor: "#4FA3F8",
    padding: "5%",
    marginBottom: "2%",
  },
  right: {
    width: "90%",
    height: "90%",
  },
  info: {
    width: "100%",
    height: "100%",
    padding: "2%",
    backgroundColor: "#FDFFF7",
  },
  basicInfo: {
    width: "90%",
    height: "auto",
    padding: "2%",
    margin: "1%",
  },
};

export default EHR;
