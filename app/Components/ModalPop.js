// import { useState,  } from 'react';
// import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material';
// import * as style from '../styles'
// import {addItem} from '../helper'


// export default function ModalPop({db_name}) {
//     const [item, setItem] = useState('');
//     const handleClose = () => setOpen(false);

//     return (
//         <Modal open={open} onClose={handleClose}>
//             <Box {...style.ModalBox}>
//             <Typography variant='h6' > Add Item </Typography>
//             <Stack width='100%' direction="row" gap={2} spacing={2}> 
//                 <TextField 
//                     variant="outlined"
//                     fullWidth
//                     value={item} 
//                     label="Enter Item Name" 
//                     onChange = {(e) => { 
//                         setItem(e.target.value)
//                     }}
//                 />
//                 <Button 
//                     variant="outlined" 
//                     color="primary" 
//                     onClick={() => {
//                         addItem(item, db_name)
//                         setItem('')  // Clear input field after item added to Inventorylist
//                         handleClose()  // Close modal when item added to Inventorylist

//                     }}
//                 >
//                 Add 
//                 </Button>
//             </Stack>
//             </Box>
//         </Modal>
//     )

// }


// export {ModalPop}