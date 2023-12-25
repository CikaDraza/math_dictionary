import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useSwitcher } from '../useSwitcher';
import { InputBase, Paper } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '2px 0px',
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     opacity: '.8'
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//     padding: '5px',
//     [theme.breakpoints.down('md')]: {
//       fontSize: '12px'
//     },
    
//   },
//   iconButton: {
//     padding: 10,
//   },
// }));


export default function SearchDatatable({ search, handleSearch, onClickClear, onClickSearch, switchedEdit }) {
  const { switched } = useSwitcher();
  
  return (
      <Paper component="form" onSubmit={onClickSearch} sx={{display: 'flex', opacity: .8}}>
        <IconButton onClick={onClickSearch} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{flex: 1}}
          value={search}
          onChange={handleSearch}
          placeholder={!switched || switchedEdit ? "Претражите речи на српском и енглеском" : "Pretražite reči na srpskom i engleskom"}
          inputProps={{ 'aria-label': 'Search words in Serbian or English' }}
        />
        {
          search && 
            <IconButton onClick={onClickClear} aria-label="search">
              <ClearIcon />
            </IconButton>
        }        
      </Paper>
  )
}