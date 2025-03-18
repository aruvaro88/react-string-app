import { createContext } from "react"
import { ItemContext } from "./../models/item.model"

export const ItemListContext = createContext<ItemContext>({
  itemList: [],
  setItemList: () => {},
  selectedItems: [],
  setSelectedItems: () => {},
  lastState: null,
  setLastState: () => {},
})
