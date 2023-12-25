import React from 'react';
import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar} from '@mui/material';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

export default function LoginLayout({ children }) {

  return (
    <React.Fragment>
      <AppBar sx={{
          flexGrow: 1,
          width: 'calc(100% - 16px)',
          margin: '8px'
        }} position="static" color="inherit" >
        <Container maxWidth="md">
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Paper elevation={0} sx={{
                  textAlign: 'left',
                  color: 'white',
                  padding: 2,
                  textAlign: 'center',
                }}>
                  <Grid container spacing={3}>
                    <Grid item xs={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                      <Link href="https://atpc.education" target="_blank" rel="noreferrer">
                        <Button sx={{
                          borderRadius: '25px',
                          color: '#f4f4f4',
                          padding: '3px 10px',
                          backgroundColor: 'purple',
                        }}>
                          НОВО
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={9}>
                      <Box sx={{ textAlign: 'left', flexGrow: 1,  marginLeft: 2 }} variant="caption">
                        Посетите наш сајт припрема тестова за америчке колеџе
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={0} sx={{
                  textAlign: 'left',
                  color: 'white',
                  padding: 2,
                  textAlign: 'center',
                }}>
                  <IconButton edge="start" sx={{
                    marginRight: 2,
                  }} color="inherit" aria-label="menu">
                  <FacebookIcon />
                  </IconButton>
                  <IconButton edge="start" sx={{
                    marginRight: 2,
                  }} color="inherit" aria-label="menu">
                    <LinkedInIcon />
                  </IconButton>
                  <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <IconButton edge="start" sx={{
                      marginRight: 2,
                    }} color="inherit" aria-label="menu">
                      <InstagramIcon />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton edge="start" sx={{
                      marginRight: 2,
                    }} color="inherit" aria-label="menu">           
                      <HomeIcon />           
                    </IconButton>            
                  </Link>
                </Paper>
              </Grid>
            </Grid> 
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm" sx={{
        padding: '100px 0'
      }}> 
        {children}
      </Container>
    </React.Fragment>
  )
}