import { ItemContext } from './../models/item.model';
import { createContext } from "react"
import Item from '../models/item.model'

export const ItemListContext = createContext<ItemContext>({
    itemList: [],
    setItemList: () => {},
    selectedItems: [],
    setSelectedItems: ()=> {},
    setHistory: () => {},
})
