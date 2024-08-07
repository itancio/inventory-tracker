

import { useState, useEffect } from 'react';
import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material'
import * as style from '../styles'
import {addItem} from '../helper'
import ItemsRow from './ItemsRow'
import ModalPop from './ModalPop'


export default function ItemsTable ({inventory, itemQuery, db_name}) {
  const rows = []

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [item, setItem] = useState('');

  if (inventory) {
    inventory.map(({ id, name, quantity }) => {
      if (name.toLowerCase().includes(itemQuery.toLowerCase())) {
        rows.push(
          <ItemsRow name = {name} quantity={quantity} db_name={db_name} key={id}/>
        )
      }
    })
  }

  return (
    <Box {...style.BoxBorder} alignContent='center'>

      <Modal open={open} onClose={handleClose}>
          <Box {...style.ModalBox}>
            <Typography variant='h6' > Add Item </Typography>
            <Stack width='100%' direction="row" gap={2} spacing={2}> 
                <TextField 
                    variant="outlined"
                    fullWidth
                    value={item} 
                    label="Enter Item Name" 
                    onChange = {(e) => { 
                        setItem(e.target.value)
                    }}
                />
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => {
                        addItem(item, db_name)
                        setItem('')  // Clear input field after item added to Inventorylist
                        handleClose()  // Close modal when item added to Inventorylist

                    }}
                >
                Add 
                </Button>
            </Stack>
          </Box>
        </Modal>
      <Stack {...style.ListBox}>
      <Box >
        <Button 
          display='flex' 
          variant="contained" 
          onClick={() => { handleOpen() }}
        > 
          Add New Item
        </Button>
      </Box>
        {rows}
      </Stack>
    </Box>
  );
};

export {ItemsTable}