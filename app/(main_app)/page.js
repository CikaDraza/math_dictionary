'use client'
import { Container } from '@mui/system'
import { Box, Grid, useMediaQuery } from '@mui/material'
import SearchDatatable from '@/src/components/Search_Datatable'
import { useCallback, useEffect, useState } from 'react';
import { useSwitcher } from '@/src/components/useSwitcher';
import axios from 'axios'
import DictionaryDatatable from '@/src/components/Dictionary_Datatable'
import CategoryButtons from '@/src/components/Category_Buttons'
import Link from 'next/link'
import CategoryDrawer from '@/src/components/Category_Drawer'
import categoryButtons from '@/src/assets/categoryButtons'

export default function Home() {
  const { switched } = useSwitcher();
  const [dictionary, setDictionary] = useState([]);
  const [dictionaryLatin, setDictionaryLatin] = useState([]);
  const [search, setSearch] = useState('');
  const [run, setRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const matches = useMediaQuery('(min-width:960px)');

  const handleSearch = (e) => {
    e.preventDefault();
    let matchSpace = e.target.value.match(/\s*/);
    if(matchSpace[0] === e.target.value) {
      setSearch(() => '');
      setRun(() => false);
      return;
    }else {
      setSearch(e.target.value);
    }
    if(e.target.value === 0 && search.length === 0){
      setDictionary([]);
      setDictionaryLatin([]);
    }
  };

  const hasWord = (word, toMatch) => {
    let wordSplitted = word.split(' ');
      if(wordSplitted.join(' ').includes(toMatch)) {
        return true;
      }
      return false;
  };

  function searchTable(rows) {
    return rows && rows.lenght !== 0 ? rows.filter((row) => ((row.Srpski && hasWord(row.Srpski.toLowerCase(), search.toLowerCase())) || (row.Српски && hasWord(row.Српски.toLowerCase(), search.toLowerCase()))) || (row.Engleski && hasWord(row.Engleski.toLowerCase(), search.toLowerCase())) || (row.Енглески && hasWord(row.Енглески.toLowerCase(), search.toLowerCase()))) : dictionary;
  }

  useEffect(()=> {
      setSearch('');
      if(isLoading) return;
      const getLatinData = async () => {
        const responseLatin = await axios.get('https://math-server.matematickirecnik.rs/dictionary-latin');
        setDictionaryLatin(responseLatin.data);
        setIsLoading(true);
      };
      getLatinData();
      const getData = async () => {
        if(isLoading) return;
        const response = await axios.get('https://math-server.matematickirecnik.rs/dictionary');
        setDictionary(response.data);
        setIsLoading(true);
      };
      getData();
  }, [switched, isLoading]);  
  
  function onClickClear(e) {
    e.preventDefault();
    setSearch(() => '');
    setRun(() => false);
  }

  function onClickSearch(e) {
    e.preventDefault();
    if(e.key === 'Enter' || search.length) {
      setRun(() => true);
    }
  }

  const handleBackspace = useCallback(
    () => {
      if(search.length) {
          setRun(() => false);
      }
    },
    [search]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleBackspace);
    return () => {
      document.removeEventListener('keydown', handleBackspace);
    };
  }, [handleBackspace]);

  return (
    <main>
      <Container maxWidth="xl">
        <CategoryDrawer categoryButtons={categoryButtons} />
        <Grid container spacing={0}>
          <Grid sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }} item xs={12} lg={3}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              width: '100%',
              gap: 1,
              backgroundColor: 'transparent',
              px: 1 
            }}>
          {
            matches && categoryButtons.buttons.slice(0,6).map((row, index) => (
              <Link key={row.id} href={`${row.name}`}>
                <CategoryButtons
                  key={index}
                  name={row.name}
                  icon={row.icon}
                  srb={!switched ? row.srb_name : row.srb_name_lat}
                  eng={row.eng_name}
                />
              </Link>
              ))
            }
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <SearchDatatable search={search} onClickSearch={onClickSearch} handleSearch={handleSearch} onClickClear={onClickClear} />
            <DictionaryDatatable loading={isLoading} search={search} data={run && (!switched ? searchTable(dictionary) : searchTable(dictionaryLatin))} />
          </Grid>
          <Grid sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }} item xs={12} lg={3}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              width: '100%',
              gap: 1,
              backgroundColor: 'transparent',
              px: 1
            }}>
            {
              matches && categoryButtons.buttons.slice(6, 12).map((row, index) => (
              <Link href={`${row.name}`} key={row.id}>  
                <CategoryButtons
                  key={index}
                  name={row.name}
                  icon={row.icon}
                  srb={!switched ? row.srb_name : row.srb_name_lat}
                  eng={row.eng_name}
                />
              </Link>
              ))
            }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
