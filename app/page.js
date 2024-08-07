'use client'

import { useState, useEffect } from 'react';
import { Box, Stack, Modal, Typography, Button, TextField, Autocomplete } from '@mui/material';
import { firestore } from '@/firebase';
import { collection, doc, docs, getDocs, query, setDoc, deleteDoc, getDoc} from 'firebase/firestore';

import { updateInventory } from './helper'
import FilterableTable from './Components/FilterableTable';
import Webcam from './Components/Webcam';

// const inventory = [
//   { id: 1,name: 'Apple', quantity: 5 },
//   { id: 2, name: 'Banana', quantity: 1 },
//   { id: 3, name: 'Orange', quantity: 3 },
//   { id: 4, name: 'Mango', quantity: 3 },
//   { id: 5, name: 'Pineapple', quantity: 2 },
//   { id: 6, name: 'Grapes', quantity: 4 },
//   { id: 7, name: 'Cherry', quantity: 1 },
//   { id: 8, name: 'Watermelon', quantity: 2 },
//   { id: 9, name: 'Pear', quantity: 4 },
//   { id: 10, name: 'Strawberry', quantity: 3 },
//   { id: 11, name: 'Lemon', quantity: 1 },
// ];



export default function Home() {
  const [inventory, setInventory] = useState([]);
  const db_name = 'inventory_db' // delete later and in all its children
  
  updateInventory(db_name)
  
  useEffect(() => {
    (async () => {
      const inventoryList = await updateInventory(db_name);
      setInventory(inventoryList);
    })();
  }, []);


  
  return (
    <Box>
      <FilterableTable inventory={inventory} db_name = {db_name}/>
    </Box>
  )
}
