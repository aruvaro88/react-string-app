export interface Item {
  id: number
  content: string
}

export interface ItemContext {
  itemList: Item[]
  setItemList: React.Dispatch<React.SetStateAction<Item[]>> // Cambié a la función de actualización correcta
  selectedItems: number[]
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>> // Cambié a la función de actualización correcta
  lastState: Item[] | null
  setLastState: React.Dispatch<React.SetStateAction<Item[] | null>> // Cambié a la función de actualización correcta
}
