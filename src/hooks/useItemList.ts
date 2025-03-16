import { ItemListContext } from './../context/itemContext';
import { Item } from './../models/item.model';
import { useContext } from 'react'

export const useItemList = () => {
    const {itemList, setItemList, selectedItems, setSelectedItems, lastState, setLastState} = useContext(ItemListContext)

    const addToItemList = (item: Item)=>{
        setLastState([...itemList])
        setItemList((prevItems) => [...prevItems, item]);
    }

    const removeFromItemList = (ids: number[]) =>{
        setLastState([...itemList])
        setItemList((prevItems) => prevItems.filter((item)=> !ids.includes(item.id)))
        setSelectedItems((prevSelected)=> prevSelected.filter((itemId)=>!ids.includes(itemId)))
    } 

    const toggleSelectItem = (id: number) => {
        setSelectedItems((prevSelected) =>
        prevSelected.includes(id)
            ? prevSelected.filter((itemId) => itemId !== id)
            : [...prevSelected, id]
        );
    };

    const undoAction = () =>{
        if(lastState){
            setItemList(lastState)
            setLastState(null)
        }
    }

    return {itemList, addToItemList, removeFromItemList, selectedItems, toggleSelectItem, undoAction}
}
