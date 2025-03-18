import { useContext } from "react"
import { ItemListContext } from "./../context/itemContext"
import { Item } from "./../models/item.model"

export const useItemList = () => {
  const { itemList, setItemList, selectedItems, setSelectedItems, lastState, setLastState } = useContext(ItemListContext)

  const addToItemList = (item: Item) => {
    setLastState([...itemList]) // Guardamos el estado anterior
    setItemList((prevItems) => [...prevItems, item]) // Actualizamos itemList
  }

  const removeFromItemList = (ids: number[]) => {
    setLastState([...itemList]) // Guardamos el estado anterior
    setItemList((prevItems) => prevItems.filter((item) => !ids.includes(item.id))) // Actualizamos itemList
    setSelectedItems((prevSelected) => prevSelected.filter((itemId) => !ids.includes(itemId))) // Actualizamos selectedItems
  }

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((itemId) => itemId !== id) : [...prevSelected, id]))
  }

  const undoAction = () => {
    if (lastState) {
      setItemList(lastState) // Restauramos el estado anterior
      setLastState(null) // Limpiamos el estado anterior
    }
  }

  return { itemList, addToItemList, removeFromItemList, selectedItems, toggleSelectItem, undoAction }
}
