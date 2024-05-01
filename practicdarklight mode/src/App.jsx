import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function App() {
 
  const storedDarkMode = localStorage.getItem("darkMode");

  const [toggleDarkMode, setToggleDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : true);


  const toggleDarkTheme = () => {
    const newDarkMode = !toggleDarkMode;
    setToggleDarkMode(newDarkMode);
    
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };


  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', 
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton onClick={toggleDarkTheme} sx={{ ml: 2 }}>
          {toggleDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
       
        <Card sx={{ width: '30%', borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Dark-Light 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Salam Af-105
            </Typography>
            <Typography variant="body1">
             Salam Lachin
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
