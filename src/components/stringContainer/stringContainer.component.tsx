import { useState, useCallback } from "react";
import styles from "./stringContainer.module.css";
import Button from "../button/button.component";
import { useItemList } from "../../hooks/useItemList.ts";
import ItemList from "../itemList/itemList.component";
import AddItemModal from "../addItemModal/addItemModal.component";
import ReplayIcon from "@mui/icons-material/Replay";

export const StringContainer: React.FC = () => {
  const { itemList, removeFromItemList, selectedItems, undoAction } = useItemList();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = () => {
    if (selectedItems.length > 0) removeFromItemList(selectedItems);
  };

  const handleAddItemClick = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <div className={styles.stringContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.header}>This is a technical proof</h1>
        <p className={styles.subHeader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla at mauris ac maximus. 
          Nunc id auctor ligula. Sed vel neque sit amet lacus porttitor dapibus vehicula vitae ligula.
        </p>
      </div>

      {itemList.length > 0 && <ItemList/>}

      <div className={styles.buttonsContainer}>
        <div className={styles.secondaryButtons}>
          <Button variant="secondary" onClick={undoAction} aria-label="Undo">
            <ReplayIcon sx={{ fontSize: 16 }} />
          </Button>
          <Button variant="secondary" onClick={handleDelete} disabled={selectedItems.length === 0}>
            DELETE
          </Button>
        </div>
        <Button variant="primary" onClick={handleAddItemClick}>ADD</Button>
      </div>

      {isModalVisible && <AddItemModal onClose={handleCloseModal} />}
    </div>
  );
};
