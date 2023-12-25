'use client'
import React from 'react';
import { MathComponent } from 'mathjax-react';
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { useSwitcher } from '@/src/components/useSwitcher';
import { styled, tableCellClasses } from '@mui/material/styles';
import data from '../../../src/assets/data/measurement.json';
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

export default function MeasurementDatatable() {
  const { switched } = useSwitcher();
  
  return (
    <main>
      <Container maxWidth="lg">
        <CategoryDrawer categoryButtons={categoryButtons} />
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', mb: 3, px: '0!important'}}>
          <Grid container spacing={0}>
            <Grid item xs={2} sm={3}>
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
            <Grid item xs={10} sm={6}>
              <Typography sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: 26
              }} variant="h2" component="h2">
                {
                  !switched ? 'мерне јединице' : 'merne jedinice'
                }
              </Typography>
            </Grid>
            <Grid item xs={0} sm={3}>
              {/*Empty block */}
            </Grid>
          </Grid>
        </Toolbar>
        <TableContainer sx={{opacity: '.8'}} component={Paper}>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
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
              data && data.measurement[0].example.map((item) => (
                <StyledTableRow key={item.ID}>
                  <StyledTableCell sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                    {
                      item.symbol ?
                      <MathComponent style={{textAlign: "left"}} tex={String.raw`n^${item.symbol}`} /> : <MathComponent style={{textAlign: "left"}} tex={String.raw`n`} />
                    }
                  </StyledTableCell>
                  <StyledTableCell sx={{width: '425px'}}>
                  {!switched ? item.Српски : item.Srpski}
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
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                    <strong>{!switched ? Object.keys(data.measurement[10].metricki_duzina[0]).slice(0, 1) : Object.keys(data.measurement[10].metricki_duzina[0]).slice(1, 2)}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Метричка јединица мере за дужину" : "Metrička jedinica mere za dužinu"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>{Object.keys(data.measurement[10].metricki_duzina[0]).slice(4, 5)}</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data && data.measurement[10].metricki_duzina.map((item) => (
                <StyledTableRow key={item["Metric units of length"]}>
                  <StyledTableCell component="th" scope="row">
                    {item["Ознака / Symbol"]}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Метричка јединица мере за дужину"] : item["Metrička jedinica mere za dužinu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Metric units of length"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? Object.keys(data.measurement[8].metricki_povrsina[0]).slice(0, 1) : Object.keys(data.measurement[8].metricki_povrsina[0]).slice(1, 2)}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? Object.keys(data.measurement[8].metricki_povrsina[0]).slice(2, 3) : Object.keys(data.measurement[8].metricki_povrsina[0]).slice(3, 4)}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>{Object.keys(data.measurement[8].metricki_povrsina[0]).slice(4, 5)}</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data && data.measurement[8].metricki_povrsina.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent style={{textAlign: "left"}} tex={String.raw`${item["Ознака / Symbol"]}^2`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Метричка јединица мере за површину"] : item["Metrička jedinica mere za površinu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Metric units of area"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Метричка јединица мере за запремину" : "Metrička jedinica mere za zapreminu"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Metric units of capacity</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[7].metricki_zapremina.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}^3`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Метричка јединица мере за запремину"] : item["Metrička jedinica mere za zapreminu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Metric units of capacity"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Метричка јединица мере за запремину течности" : "Metrička jedinica mere za zapreminu tečnosti"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Metric units of capacity</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[6].metricki_tecnost.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Метричка јединица мере за запремину течности"] : item["Metrička jedinica mere za zapreminu tečnosti"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Metric units of capacity"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Метричка јединица мере за масу" : "Metrička jedinica mere za masu"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Metric units of mass</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[9].metricki_masa.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Метричка јединица мере за масу"] : item["Metrička jedinica mere za masu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Metric units of mass"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Јединица мере за време" : "Jedinica mere za vreme"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Units of time</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[5].metricki_vreme.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Јединица мере за време"] : item["Jedinica mere za vreme"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Units of time"]} 
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
                  <strong>{!switched ? "Амерички систем" : "Američki sistem"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Customary system</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Америчка јединица мере за дужину" : "Jedinica mere za vreme"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Customary units of length</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[4].americka_duzina.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Америчка јединица мере за дужину"] : item["Američka jedinica mere za dužinu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Customary units of length"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Америчка јединица мере за површину" : "Američka jedinica mere za površinu"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Customary units of area</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[2].americka_povrsina.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}^2`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Америчка јединица мере за површину"] : item["Američka jedinica mere za površinu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Customary units of area"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Америчка јединица мере за запремину" : "Američka jedinica mere za zapreminu"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Customary units of capacity</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[3].americka_zapremina.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}^3`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Америчка јединица мере за запремину"] : item["Američka jedinica mere za zapreminu"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Customary units of capacity"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}> 
                  <strong>{!switched ? "Америчка јединица мере за запремину" : "Američka jedinica mere za zapreminu"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Customary units of capacity</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[1].americka_tecnost.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Америчка јединица мере за течност"] : item["Američka jedinica mere za tečnost"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Customary units of capacity"]} 
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }          
            </TableBody>
          </Table>
          <Table stickyHeader sx={{minWidth: 300}} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row" sx={{paddingRight: 0, width: '300px', maxWidth: '300px'}}>
                  <strong>{!switched ? "Ознака / Symbol" : "Ознака / Symbol"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" sx={{width: '425px'}}>
                  <strong>{!switched ? "Америчка јединица мере за течност" : "Američka jedinica mere za tečnost"}</strong>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  <strong>Customary units of capacity</strong>
                  </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>        
            {
              data.measurement[1].americka_tecnost.map((item) => (
                <StyledTableRow key={item["Ознака / Symbol"]}>
                  <StyledTableCell component="th" scope="row">
                    <MathComponent tex={String.raw`${item["Oznaka / Symbol"]}`} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {!switched ? item["Америчка јединица мере за течност"] : item["Američka jedinica mere za tečnost"]} 
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {item["Customary units of capacity"]} 
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