'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Icon, ListItemIcon, ListSubheader, SwipeableDrawer, useMediaQuery } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useSwitcher } from '../useSwitcher';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryDrawer({ categoryButtons, match}) {
  const { switched } = useSwitcher();
  const matches = useMediaQuery('(max-width:780px)');
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListSubheader sx={{backgroundColor: 'white'}}>
          <ListItem>
            <ListItemText primary={!switched ? "Категорије" : "Kategorije"} />
          </ListItem>
        </ListSubheader>
        {
          categoryButtons.buttons.map((row) => (
          <Link href={`${row.name}`} key={row.id} passHref>
            <ListItem>
              <ListItemIcon>
                <Icon sx={{'& img': {filter: 'invert(1)', objectFit: 'contain'}, position: 'relative' }}>
                  <Image fill src={`${row.icon.src}`} alt={`${row.name}`} />
                </Icon>
              </ListItemIcon>
              <ListItemText primary={!switched ? row.srb_name : row.srb_name_lat} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{
      display: matches ? 'flex' : 'none',
      position: 'relative',
      top: 0,
      backgroundColor: 'rgba(200,200,200,.2)',
      borderRadius: '0 15px 15px 0',
      padding: '0px 0px',
      margin: '0px 0 0 -25px',
      boxShadow: '0 0 30px #a2fdec',
      zIndex: 100,
      width: 60
      }}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<PaletteIcon style={{color: '#f4f4f4', fontSize: '32px'}}/>}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
