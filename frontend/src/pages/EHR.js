import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import data from "./data.js";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#D9D9D9",
    },
  },
});

const EHR = () => {
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [clickedIndex, setClickedIndex] = useState(null);
  const [diagnose, setDiagnose] = useState("");

  const handleClick = (index) => {
    setFamilyName(data[index].entry[0].resource.name[0].family);
    setGivenName(data[index].entry[0].resource.name[0].given);
    setGender(data[index].entry[0].resource.gender);
    setBirthDate(data[index].entry[0].resource.birthDate);
    setClickedIndex(index);
    setDiagnose("");
  };

  const handleChange = (event) => {
    setDiagnose(event.target.value);
  };

  return (
    <ThemeProvider theme={buttonTheme}>
      <Box sx={styles.column}>
        <Typography sx={styles.title}>AI Diagnose</Typography>
        <Box sx={styles.row}>
          <MenuList>
            {data.map((patient, index) => {
              return (
                <MenuItem sx={styles.menu}>
                  <Card
                    sx={
                      index === clickedIndex
                        ? { ...styles.card, ...styles.cardClicked }
                        : styles.card
                    }
                    onClick={() => handleClick(index)}
                  >
                    <Box sx={{ ...styles.row, justifyContent: "wrap" }}>
                      <Typography sx={styles.menuText}>
                        {patient.entry[0].resource.name[0].family
                          .toString()
                          .replace(/\d/g, "")}
                      </Typography>
                      <Typography sx={styles.menuText}>
                        {patient.entry[0].resource.name[0].given
                          .toString()
                          .replace(/\d/g, "")}
                      </Typography>
                    </Box>
                    <Typography sx={styles.menuText}>
                      {patient.entry[0].resource.birthDate}
                    </Typography>
                    <Typography sx={styles.menuText}>
                      {patient.entry[0].resource.gender}
                    </Typography>
                  </Card>
                </MenuItem>
              );
            })}

            <Divider />
          </MenuList>
          <Divider
            orientation="vertical"
            color="#0E46A3"
            sx={{ borderWidth: "1px" }}
            flexItem
          />
          <Box sx={{ ...styles.inputArea, overflow: "auto" }}>
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
                    <Typography sx={styles.text}>
                      Birth Date: {birthDate}
                    </Typography>
                    <Typography sx={styles.text}>Gender: {gender}</Typography>
                  </Box>
                </Card>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>Lab Test</Typography>
                  <Box sx={{ ...styles.row, justifyContent: "wrap" }}>
                    <Typography>...</Typography>
                  </Box>
                </Card>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>AI Diagnose</Typography>
                  <Box sx={{ ...styles.row, justifyContent: "wrap" }}>
                    <Typography>...</Typography>
                  </Box>
                </Card>
                <Card sx={styles.basicInfo}>
                  <Typography sx={styles.subTitle}>Doctor Diagnose</Typography>
                  <TextField
                    multiline
                    value={diagnose}
                    sx={styles.doctorInput}
                    onChange={handleChange}
                  ></TextField>
                </Card>
                <Box sx={styles.row}>
                  <Button variant="contained">Cancel</Button>
                  <Button variant="contained">Save</Button>
                </Box>
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
    color: "#0E46A3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2vh",
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
    display: "flex",
    flexDirection: "column",
    gap: "2vh",
  },
  menuText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "Black",
  },
  card: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D9D9D9",
    padding: "5%",
    marginBottom: "2%",
  },
  cardClicked: {
    backgroundColor: "#378CE7",
  },
  right: {
    width: "90%",
    height: "90%",
  },
  info: {
    width: "100%",
    height: "100%",
    padding: "2%",
    backgroundColor: "#378CE7",
  },
  basicInfo: {
    width: "90%",
    height: "auto",
    padding: "2%",
    margin: "1%",
  },
  doctorInput: {
    width: "100%",
  },
};

export default EHR;
