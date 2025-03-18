import ReplayIcon from "@mui/icons-material/Replay"
import React, { useCallback, useState } from "react"
import { Item } from "../../models/item.model"
import AddItemModal from "../addItemModal/addItemModal.component"
import Button from "../button/button.component"
import ItemComponent from "../itemComponent/itemComponent.component"
import styles from "./itemList.module.css"

const ItemList: React.FC = () => {
  const [itemList, setItemList] = useState<Item[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [lastState, setLastState] = useState<Item[] | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleAddItemClick = () => setIsModalVisible(true)
  const handleCloseModal = () => setIsModalVisible(false)

  const addToItemList = (item: Item) => {
    setLastState([...itemList])
    setItemList((prevItems) => [...prevItems, item])
  }

  const removeFromItemList = useCallback(
    (ids: number[]) => {
      setLastState([...itemList])
      setItemList((prevItems) => prevItems.filter((item) => !ids.includes(item.id)))
      setSelectedItems((prevSelected) => prevSelected.filter((itemId) => !ids.includes(itemId)))
    },
    [itemList]
  )

  const toggleSelectItem = useCallback((id: number) => {
    setSelectedItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((itemId) => itemId !== id) : [...prevSelected, id]))
  }, [])

  const undoAction = () => {
    if (lastState) {
      setItemList(lastState)
      setLastState(null)
    }
  }
  const handleDelete = useCallback(() => {
    removeFromItemList(selectedItems)
  }, [selectedItems, removeFromItemList])

  return (
    <>
      {itemList.length > 0 && (
        <div className={`${styles.itemListContainer}`}>
          {itemList.map((item: Item) => (
            <ItemComponent
              key={item.id}
              item={item}
              isSelected={selectedItems.includes(item.id)}
              onClick={toggleSelectItem}
              onDoubleClick={() => removeFromItemList([item.id])}
            />
          ))}
        </div>
      )}
      <div className={styles.buttonsContainer}>
        <div className={styles.secondaryButtons}>
          <Button variant="secondary" onClick={undoAction} aria-label="Undo">
            <ReplayIcon sx={{ fontSize: 16 }} />
          </Button>
          <Button variant="secondary" onClick={handleDelete} disabled={selectedItems.length === 0}>
            DELETE
          </Button>
        </div>
        <Button variant="primary" onClick={handleAddItemClick}>
          ADD
        </Button>
      </div>

      {isModalVisible && <AddItemModal onClose={handleCloseModal} onAddItem={addToItemList} />}
    </>
  )
}
export default ItemList
