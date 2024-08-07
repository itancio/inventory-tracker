import { useState } from 'react';
import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material';

import * as style from '../styles'

import ItemsTable from './ItemsTable'
import SearchBar from './SearchBar'

export default function FilterableTable ({inventory, db_name}) {
  console.log('FilterableTable:', inventory, inventory.length)

    // const [inventory, setInventory] = useState(initialInventory);
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
  
        <ItemsTable inventory={inventory} itemQuery = {itemQuery} db_name={db_name} />
  

      </Stack>
    )
  }

  export {FilterableTable}