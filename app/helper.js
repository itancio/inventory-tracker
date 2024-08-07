import { firestore } from '@/firebase';
import { collection, doc, docs, getDocs, query, setDoc, deleteDoc, getDoc} from 'firebase/firestore';


const addItem = async (item, db_name) => {
    const docRef = doc(collection(firestore, db_name), item)
    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
        const {quantity} = docSnapshot.data()
        await setDoc(docRef, { quantity: quantity + 1 })
    } else {
        await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory()
}
  
const removeItem = async (item, db_name) => {
const docRef = doc(collection(firestore, db_name), item)
const docSnapshot = await getDoc(docRef)
if (docSnapshot.exists()) {
    const {quantity} = docSnapshot.data()
    if (quantity > 1) {
        await setDoc(docRef, { quantity: quantity - 1 })
    }
}
    await updateInventory()
}

const deleteItem = async (item, db_name) => {
    const docRef = doc(collection(firestore, db_name), item)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const {quantity} = docSnapshot.data()
        if (quantity === 1) {
            await deleteDoc(docRef)
        }
    }
    await updateInventory()
}

export {removeItem, deleteItem, addItem}