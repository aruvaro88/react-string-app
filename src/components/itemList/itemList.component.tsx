import React, { useEffect, useState } from "react";
import { useItemList } from "../../hooks/useItemList";
import ItemComponent from "../itemComponent/itemComponent.component";
import './itemList.styles.css'

const ItemList = () => {
  const { itemList } = useItemList();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectItem = (id: number) => {
    console.log(id)
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="item-list-container">
      {itemList.map((item: Item) => (
        
              <ItemComponent
                key={item.id}
                item={item}
                isSelected={selectedItems.includes(item.id)}
                onSelect={toggleSelectItem}
              />
        
          ))}
    </div>
  );
};
export default ItemList
