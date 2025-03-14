import React, { useState } from 'react'
import { useItemList} from '../../hooks/useItemList.ts'
import Item from '../../models/item.model.ts'
import styles from "./addItemModal.module.css"
import Button from '../button/button.component'

interface AddItemModalProps{
    onClose: () => void
}

const AddItemModal = ({onClose}) =>{
    const { addToItemList } = useItemList()
    const [newItemString, setNewItemString] = useState<string>("")

    const handleAddItem = () => {
        addToItemList({id: Date.now(), content: newItemString})
        setNewItemString("")
        onClose()
    }

    return (
    <div className={`${styles.modalContainer}`}>
      <div className={`${styles.modalContent}`}>
        <span className={`${styles.header}`}>Add item to list</span>
        <input
          type="text"
          placeholder="Type the text here"
          value={newItemString}
          onChange={(e) => setNewItemString(e.target.value)}
          className={`${styles.textInput}`}
        />
        <div className={`${styles.buttonsContainer}`}>
            <Button variant="primary" onClick={handleAddItem}>Añadir</Button>
            <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        </div>
      </div>
    </div>
  );

  }
export default AddItemModal;