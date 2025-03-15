import React from "react";
import { Item } from "../../models/item.model";
import styles from "./itemComponent.module.css"
import { useItemList } from '../../hooks/useItemList.ts'

interface ItemComponentProps {
  item: Item;
  isSelected: boolean
  onSelect: (id: number) => void;
}

const ItemComponent = ({ item, isSelected, onSelect }:ItemComponentProps) => {
    const { removeFromItemList } = useItemList()
  return (
    <div
      className={`${styles.item} ${isSelected && styles.selected}`}
      onClick={() => onSelect(item.id)}
      onDoubleClick={()=>removeFromItemList([item.id])}
    >
      <span>{item.content}</span>
    </div>
  );
};

export default ItemComponent;
