import React, { useEffect, useState } from "react";
import { useItemList } from "../../hooks/useItemList";
import ItemComponent from "../itemComponent/itemComponent.component";
import styles from './itemList.module.css'

const ItemList = () => {
  const { itemList, selectedItems, toggleSelectItem } = useItemList();

  return (
    <div className={`${styles.itemListContainer}`}>
      {itemList.map((item: Item) => (
        <ItemComponent
        key={item.id}
        item={item}
        isSelected={selectedItems?.includes(item.id) ?? false}
        onSelect={toggleSelectItem}
        />
    ))}
    </div>
  );
};
export default ItemList
