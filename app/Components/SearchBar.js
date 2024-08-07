import { Box, TextField, } from '@mui/material';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';

import * as style from '../styles'

export default function SearchBar({itemQuery, onItemQueryChange}) {
  return (
    <Box width={500}>
      <form  noValidate autoComplete="on">
        <TextField 
        {...style.SearchBox}
        label = 'Search or Add items'
        value = {itemQuery}
        fullWidth
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

export {SearchBar}