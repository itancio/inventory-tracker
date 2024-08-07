import { firestore } from '@/firebase';
import { collection, doc, docs, getDocs, query, setDoc, deleteDoc, getDoc} from 'firebase/firestore';

const updateInventory = async (db_name='inventory_db') => {
  const snapshot = query(collection(firestore, db_name))
  const docs = await getDocs(snapshot)
  const inventoryList = []

  if (!docs.empty) {
      docs.forEach((doc) => { 
          inventoryList.push({
              name: doc.id,
              ...doc.data(),
          })
      })
  } else {
      console.log('No documents found')
  }
  return inventoryList
}

const addItem = async (item, db_name='inventory_db') => {
    const docRef = doc(collection(firestore, 'inventory_db'), item)
    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
        const {quantity} = docSnapshot.data()
        await setDoc(docRef, { quantity: quantity + 1 })
    } else {
        await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory(db_name)
}
  
const removeItem = async (item, db_name='inventory_db') => {
    const docRef = doc(collection(firestore, db_name), item)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const {quantity} = docSnapshot.data()
        if (quantity > 1) {
            await setDoc(docRef, { quantity: quantity - 1 })
        }
    }
        await updateInventory(db_name)
    }

const deleteItem = async (item, db_name='inventory_db') => {
    const docRef = doc(collection(firestore, db_name), item)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const {quantity} = docSnapshot.data()
        if (quantity === 1) {
            await deleteDoc(docRef)
        }
    }
    await updateInventory(db_name)
}

export {removeItem, deleteItem, addItem, updateInventory}