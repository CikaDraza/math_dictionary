'use client'
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSwitcher } from '../useSwitcher';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'lightGrey',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DictionaryDatatable({ data, search, loading }) {
  const columns = data[0] && Object.keys(data[0]);
  const { switched } = useSwitcher();
  const [src, setSrc] = useState('');
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [rows, setRows] = useState({
    items: Array.from({ length: 20 }),
  });

  const fetchMore = () => {
    setRows({
      items: rows.items.concat(Array.from({ length: 20 }))
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSrc('');
  };

  return (
    <TableContainer id="scrollableDiv" component={Paper} sx={{mt: 3, opacity: .8}}> 
      <InfiniteScroll
      dataLength={rows.items}
      next={fetchMore}
      hasMore={true}
      height={650}
      scrollableTarget="scrollableDiv"
    >   
      <Table stickyHeader aria-label="customized table" sx={{minWidth: 300}}>
          <TableHead>
            <TableRow>
            {
              columns && columns.slice(1, 3).map((heading, index)=>
              <StyledTableCell align={index === 2 ? 'right' : 'left'} key={index}>
                {heading}
              </StyledTableCell>             
              )
            }               
            </TableRow>
          </TableHead>        
          <TableBody>        
            {search === '' || data.length === 0 ? data = [] : data && data.slice(0, rows.items.length).map((row) => (
              <StyledTableRow hover key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {!switched ? row.Српски : row.Srpski}
                </StyledTableCell>
                <StyledTableCell>
                  {!switched ? row.Енглески : row.Engleski}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
      </Table>
      {
        !loading ?
          <Box sx={{width: '100%', marginTop: '50px'}}>
            <LinearProgress color="secondary" />
          </Box>
         : search === '' ? 
         <Typography sx={{color: 'grey', fontSize: '24px', fontWeight: '600', textAlign: 'center', padding: '20px'}}>{!switched ? "Унесите реч у поље за унос" : "Unesite reč u polje za unos"}</Typography> : search !== "" && data.length === 0 && <Typography>{!switched ? "Резултат није пронађен" : "Rezultat nije pronađen"}
         </Typography>
        
      }
      {/*<ImageModal handleClose={handleClose} title={title} open={open} src={src} />*/}
      </InfiniteScroll>
    </TableContainer>
  )
}
