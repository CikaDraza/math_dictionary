'use client'
import React from 'react';
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useSwitcher } from '@/src/components/useSwitcher';
import { styled, tableCellClasses } from '@mui/material/styles';
import data from '../../../src/assets/data/digit.json';
import Link from 'next/link';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import CategoryDrawer from '@/src/components/Category_Drawer';
import categoryButtons from '@/src/assets/categoryButtons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses && tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses && tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Digit() {
  const { switched } = useSwitcher();
  const matches = useMediaQuery('(min-width:960px)');

  return (
    <main>
      <Container maxWidth="lg">
        <CategoryDrawer categoryButtons={categoryButtons} />
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', my: 3, px: '0!important'}}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <Link href="/" passHref>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: '.75rem',
                    marginRight: 0,
                    color: 'white',
                    border: "none",
                    '&:hover': { border: 'none', color: 'whitesmoke',}
                  }}
                  startIcon={<KeyboardReturnIcon />}
                >
                  {
                    !switched ? 'назад' : 'nazad'
                  }
                </Button>          
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: 26
              }} variant="h4" component="h2">
                {
                  !switched ? 'месна вредност цифре' : 'mesna vrednost cifre'
                }
              </Typography>
            </Grid>
            <Grid item xs={0} sm={3}>
              {/*Empty block */}
            </Grid>
          </Grid>
        </Toolbar>
        {/* Category Content */}
        <TableContainer sx={{opacity: '.8'}} component={Paper}>
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell sx={{minWidth: 300}}>
                <strong>{!switched ? "Пример" : "Primer"}</strong>
                </StyledTableCell>
                <StyledTableCell sx={{minWidth: 300}}>
                <strong>Example</strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>
                <strong>{!switched ? "Српски" : "Srpski"}</strong>
                </StyledTableCell>
                <StyledTableCell>
                <strong>English</strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
            {
              data.example.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>
                    {item.num}
                  </StyledTableCell>
                  <StyledTableCell>
                  {!switched ? item.Srpski_cir : item.Srpski}
                  </StyledTableCell>
                  <StyledTableCell>
                    {item.English}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell sx={{minWidth: '60px'}} component="th" scope="row">
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <strong>
                  {!switched ? 'Српски' : 'Srpski'}
                  </strong>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                <strong>
                  English
                </strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell sx={{minWidth: '60px'}} component="th" scope="row">
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <strong>
                  {!switched ? (Object.keys(data.digits[0]).slice(2, 3)) : (Object.keys(data.digits[0]).slice(1, 2))}
                  </strong>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                <strong>
                  {(Object.keys(data.digits[0]).slice(3, 4))}
                </strong>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
            {
              data.digits.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell sx={{minWidth: '60px'}} component="td" scope="row">
                  </StyledTableCell>
                  <StyledTableCell sx={{minWidth: '300px'}} component="td" scope="row">
                    {!switched ? item[" Месна вредност"] : item[" Mesna vrednost"]}
                  </StyledTableCell>
                  <StyledTableCell sx={{minWidth: '300px'}} component="td" scope="row">
                    {item[" Place value"]}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </main>
  )
}