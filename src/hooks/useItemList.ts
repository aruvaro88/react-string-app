import { ItemListContext } from './../context/itemContext';
import { Item } from './../models/item.model';
import { useContext } from 'react'

export const useItemList = () => {
    const {itemList, setItemList} = useContext(ItemListContext)

    const addToItemList = (item: Item)=>{
        setItemList((prevItems) => [...prevItems, item]);
        console.log(item)
    }

    const removeFromItemList = (item: Item) =>{
        setItemList(itemList.filter((elm)=> elm.id !== item.id))
    } 

    return {itemList, addToItemList, removeFromItemList}
}
