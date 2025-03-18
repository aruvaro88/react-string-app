import React from "react"
import { Item } from "../../models/item.model"
import styles from "./itemComponent.module.css"

interface ItemComponentProps {
  item: Item
  isSelected: boolean
  onClick: (id: number) => void
  onDoubleClick: (ids: number[]) => void
}

const ItemComponent: React.FC<ItemComponentProps> = ({ item, isSelected, onClick, onDoubleClick }) => {
  return (
    <div
      className={`${styles.item} ${isSelected && styles.selected}`}
      onClick={() => onClick(item.id)}
      onDoubleClick={() => onDoubleClick([item.id])}
    >
      <span>{item.content}</span>
    </div>
  )
}

export default ItemComponent
