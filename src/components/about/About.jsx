'use client'

import { Grid, Box, Stack, Typography } from "@mui/material";
import styles from "./about.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logos cos2 1.png";
  import {styled} from 'styled-components';

const StyledTypography = styled.div`
  font-size: 36px;
  color: #000000;
    font-family: "Lexend";
    font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const StyledParagraph = styled.div`
  font-size: 24px;
  font-family: Lexend;
font-weight: 400;
letter-spacing: 0em;
text-align: justify;
color:black;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;


const About = () => {
  return (
    <>
      <Box className={styles.flexcontainer}>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <StyledTypography  >
            ABOUT US
          </StyledTypography>
        </Stack>

        <Grid container  alignItems='center'  direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}    sx={{  width:'100%',  }}>
          <Grid item  xs={12} sm={12} md={2} sx={{ padding:{xs:0, sm:0, md:'10px 40px'},}} >
            <Image src={Logo} alt="logo" className={styles.images}/>
          </Grid>
          <Grid item xs={12} sm={12}  md={10} sx={{padding:{xs:0, sm:0, md:'0px 60px'}, }}>
            <StyledParagraph component="paragraph" >
              At Code Optix Solutions, we are a tight-knit team of developers,
              complemented by visionary UI/UX designers. Together, we form an
              agile force, dedicated to weaving digital dreams into reality.
              With a keen eye for detail and a passion for innovation, we
              specialize in web development, e-commerce solutions, web
              applications, API development, and beyond.
            </StyledParagraph>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
