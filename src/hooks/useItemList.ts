import { ItemListContext } from './../context/itemContext';
import { Item } from './../models/item.model';
import { useContext } from 'react'

export const useItemList = () => {
    const {itemList, setItemList, selectedItems, setSelectedItems, setHistory} = useContext(ItemListContext)

    const addToItemList = (item: Item)=>{
        // setHistory((prev) => [...prev, itemsList]);
        setItemList((prevItems) => [...prevItems, item]);
        console.log(item)
    }

    const removeFromItemList = (ids: number[]) =>{
        console.log('remove item',ids)
        setItemList((prevItems) => prevItems.filter((item)=> !ids.includes(item.id)))
        setSelectedItems((prevSelected)=> prevSelected.filter((itemId)=>!ids.includes(itemId)))
    } 

    const toggleSelectItem = (id: number) => {
        console.log(id)
        setSelectedItems((prevSelected) =>
        prevSelected.includes(id)
            ? prevSelected.filter((itemId) => itemId !== id)
            : [...prevSelected, id]
        );
    };

    const undoAction = () =>{
    //   setItemsList((prev) => prev.slice(0, -1));
      setHistory((prev) => prev.slice(0, -1)); 
    }

    return {itemList, addToItemList, removeFromItemList, selectedItems, toggleSelectItem, undoAction}
}
