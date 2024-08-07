import { useState } from 'react';
import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material';

import * as style from '../styles'

import ItemsTable from './ItemsTable'
import SearchBar from './SearchBar'

export default function FilterableTable ({inventory}) {
    const [itemQuery, setItemQuery] = useState('');
    return (
      <Stack {...style.MainBox}>
        <Box >
          <Typography variant='h3' > 
            Inventory List
          </Typography>
        </Box>
  
        <SearchBar
          itemQuery = {itemQuery}
          onItemQueryChange={setItemQuery} />
  
        <ItemsTable inventory={inventory} itemQuery = {itemQuery} />
  

      </Stack>
    )
  }

  export {FilterableTable}