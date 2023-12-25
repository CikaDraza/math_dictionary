'use client'
import React, { useEffect, useState } from 'react';
import { Box, Fab, Grid, IconButton, Paper, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import NavigationIcon from '@mui/icons-material/Navigation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[50]
    }
  },
});

export default function Footer() {
  const matches = useMediaQuery('(min-width:960px)');
  const [isVisible, setIsVisible] = useState(false);
  const [removeGoTopBtn, setRemoveGoTopBtn] = useState(false);
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  function toggleVisibility() {
    const visibleBtn = window.scrollY;
    visibleBtn > 300 ? setIsVisible(true) : setIsVisible(false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const originURL = "/";
    const currentURL = window.location.pathname;
    currentURL === originURL ? setRemoveGoTopBtn(prev => !prev) :
    setRemoveGoTopBtn(false);
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box component="footer" sx={{
      flexGrow: 1,
      width: '100%',
      background: 'transparent'
    }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{
            paddingTop: 2,
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'transparent'
          }}>
            Math Dictionary &copy; 2021 - {getCurrentYear()}
            <Link href="/login" passHref underline="none">
              <IconButton sx={{
                '& .MuiSvgIcon-root': {
                  color: '#a2fdec'
                }
              }}>
                <MoreHorizIcon />          
              </IconButton>
            </Link>
          </Paper>
        </Grid>
      </Grid>
      {
        !removeGoTopBtn && (matches && 
        <ThemeProvider theme={theme}>
          <Fab onClick={scrollToTop} sx={{
            position: 'fixed',
            right: '5%',
            bottom: '5%',
            transform:  isVisible ? 'translateY(0px)' : 'translateY(150px)',
            transition: 'all .5s cubic-bezier(.77,0,.175,1)'
          }} color="primary" aria-label="add">
            <NavigationIcon />
          </Fab>
        </ThemeProvider>)
      }
    </Box>
  );
}