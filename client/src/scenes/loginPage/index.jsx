import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box className="app">
      <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
       
      > 
        <h1 className="theme">PhotoBomb</h1>
      </Box>
     

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
        <p> Creating a timeless look, coupled with a flawless moment.</p>
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;