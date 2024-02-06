import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
// import styles from "./contact.module.css"

export default function Header() {
  return (
    <>
    <Grid item xs={12}>
        <Stack direction='column' alignItems='center' justifyContent='center' textAlign='center'>
          <Typography 
          component='div'
          // className={styles.services}
            sx={{
              fontSize: '36px',
              fontWeight: ' 600',
              fontFamily:"Lexend"
            }}
          >
            CONTACT US!
            
          </Typography>
          
        </Stack>
      </Grid>
    </>
  );
}
