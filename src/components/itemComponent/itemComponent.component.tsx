import React from "react";
import { Item } from "../../models/item.model";

interface ItemComponentProps {
  item: Item;
  isSelected: boolean
  onSelect: (id: number) => void;
}

const ItemComponent = ({ item, isSelected, onSelect }:ItemComponentProps) => {
  return (
    <div
      className={`item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(item.id)}
    >
      <p>{item.content}</p>
    </div>
  );
};

export default ItemComponent;
