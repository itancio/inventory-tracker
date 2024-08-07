import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import DeleteOutlineRounded from '@mui/icons-material/DeleteOutlineRounded';

import * as style from '../styles'
import {addItem, removeItem, deleteItem} from '../helper'

export default function ItemsRow({name, quantity, db_name}) {
  return (
    <Box {...style.Item} >
      <Typography variant='body1' color='333' textAlign='center'>
        {name}
      </Typography>
      <Box {...style.ItemBox}>
        <Stack {...style.Quantity}>
          {quantity === 1 ? (
            <DeleteOutlineRounded onClick={() => deleteItem(name, db_name)}/>
          ) : (
            <RemoveCircleRoundedIcon onClick={() => removeItem(name, db_name)} />
          )}
          <Typography color='333' textAlign='center'>
            {quantity}
          </Typography>
          <AddCircleRoundedIcon onClick={() => addItem(name, db_name)} />
        </Stack>
      </Box>
    </Box>
  )
}

export {ItemsRow}