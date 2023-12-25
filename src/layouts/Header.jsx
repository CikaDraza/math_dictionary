'use client'

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import SwitchLetter from "../components/Switch_Letter";
import { styled } from '@mui/material/styles';
import { useSwitcher } from "../components/useSwitcher";
import video_icon from '../assets/icons/video_icon.svg';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MovieIcon from '@mui/icons-material/Movie';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  '& .css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab': {
    backgroundColor: 'transparent!important',
    '&:hover': {
      boxShadow: '0 0 30px #a2fdec'
    }
  },
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <Link style={{display: 'flex', alignItems: 'center'}} href="https://www.youtube.com/watch?v=74CYzDMTvjc" target="_blank" underline="none"><MovieIcon /></Link>, nameLat: 'YouTube Video Vodič', nameCir: 'YouTube Видео Водич' },
  { icon: <Link style={{display: 'flex', alignItems: 'center'}} href="https://www.youtube.com/watch?v=Q84AqhdbPF4" target="_blank" underline="none"><MovieIcon /></Link>, nameLat: 'YouTube Video Guide', nameCir: 'YouTube Video Guide in English' },
];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
    fontSize: 16,
    textAlign: 'center',
  },
}));

const StyledDivGrow = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    display: 'block',
  }
}));

const StyledNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export default function Header() {
  const { switched } = useSwitcher();

  return (
    <AppBar elevation={0} sx={{bgcolor: 'transparent', py: 3}} position="static">
      <StyledToolbar>
        <StyledTitle variant="h4" component="h1">
          Serbian - English Mathematics Dictionary by {!switched ? "Миленa Шовић" : "Milena Šović"}           
        </StyledTitle>
        <StyledDivGrow />
        <StyledNav>
          <SwitchLetter />
          <Box sx={{ position: 'relative', mt: 0, width: 100, height: 50 }}>
            <StyledSpeedDial
              ariaLabel="SpeedDial"
              icon={<SpeedDialIcon />}
              direction="down"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={switched ? action.nameCir : action.nameLat}
                  icon={action.icon}
                  tooltipTitle={!switched ? action.nameCir : action.nameLat}
                />
              ))}
            </StyledSpeedDial>
          </Box>
          <Link href="https://atpc.education/" target="_blank" underline="none">
            <Button sx={{borderRadius: '30px', '&:hover': {
              boxShadow: '0 0 30px #a2fdec'
            }}} variant="outlined" color="inherit">
              ATPC Education
            </Button>     
          </Link>
        </StyledNav>
      </StyledToolbar>        
    </AppBar>
  )
}