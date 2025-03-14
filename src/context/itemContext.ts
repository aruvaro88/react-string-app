import { ItemContext } from './../models/item.model';
import { createContext } from "react"

export const ItemListContext = createContext<ItemContext>({
    itemList: [],
    setItemList: () => {},
})
