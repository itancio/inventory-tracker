'use client'

import { useState, useEffect } from 'react';
import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material';
import { firestore } from '@/firebase';
import { collection, doc, docs, getDocs, query, setDoc, deleteDoc, getDoc} from 'firebase/firestore';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import DeleteOutlineRounded from '@mui/icons-material/DeleteOutlineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';

import * as style from './styles'

import { v4 as uuidv4 } from 'uuid'     // DELETE THESE LINES

const inventory = [
  { id: 1,name: 'Apple', quantity: 5 },
  { id: 2, name: 'Banana', quantity: 1 },
  { id: 3, name: 'Orange', quantity: 3 },
  { id: 4, name: 'Mango', quantity: 3 },
  { id: 5, name: 'Pineapple', quantity: 2 },
  { id: 6, name: 'Grapes', quantity: 4 },
  { id: 7, name: 'Cherry', quantity: 1 },
  { id: 8, name: 'Watermelon', quantity: 2 },
  { id: 9, name: 'Pear', quantity: 4 },
  { id: 10, name: 'Strawberry', quantity: 3 },
  { id: 11, name: 'Lemon', quantity: 1 },
];

const ItemsRow = ({name, quantity}) => {
  return (
    <Box {...style.Item} >
      <Typography variant='body1' color='333' textAlign='center'>
        {name}
      </Typography>
      <Box {...style.ItemBox}>
        <Stack {...style.Quantity}>
          {quantity === 1 ? (
            <DeleteOutlineRounded />
          ) : (
            <RemoveCircleRoundedIcon />
          )}
          <Typography color='333' textAlign='center'>
            {quantity}
          </Typography>
          <AddCircleRoundedIcon />
        </Stack>
      </Box>
    </Box>
  )
}

const ItemsTable = ({inventory, itemQuery}) => {
  const rows = []
  inventory.map(({ id, name, quantity }) => {
    if (name.toLowerCase().includes(itemQuery.toLowerCase())) {
      rows.push(
        <ItemsRow name = {name} quantity={quantity} key={id}/>
      )
    }
  })

  if (rows.length === 0) {
    rows.push(
      <AddItemButton name={itemQuery} key={'addmeitembutton'}/>
    )
  }
  return (
    <Box {...style.BoxBorder}>
      <Stack {...style.ListBox}>
        {rows}
      </Stack>
    </Box>
  );
};

const AddItemButton = ({itemQuery}) => {
  return (
    <Box {...style.ListBox}>
      <Button variant="contained"> 
        Add New Item
      </Button>
    </Box>
  )
}

const SearchBar = ({itemQuery, onItemQueryChange}) => {
  return (
    <Box width={500}>
      <form  noValidate autoComplete="on">
        <TextField id="outlined-basic" 
          label="search items" 
          variant="outlined"
          value = {itemQuery}
          fullWidth
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
          onChange = {(e) => onItemQueryChange(e.target.value)}  />
          
      </form>
    </Box>
  )
}

const FilterableTable = ({inventory}) => {
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

export default function Home() {
  // const filteredInventory = inventory.filter((item) => 
  //   item.name.toLowerCase().includes(itemQuery.toLowerCase))

  return (
    <Box>
      <FilterableTable inventory={inventory}/>
    </Box>
  )
}
