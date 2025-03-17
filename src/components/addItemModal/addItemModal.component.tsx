import React, { useState } from 'react'
import { useItemList} from '../../hooks/useItemList.ts'
import Item from '../../models/item.model.ts'
import styles from "./addItemModal.module.css"
import Button from '../button/button.component'

interface AddItemModalProps{
    onClose: () => void
}

const AddItemModal: React.FC<AddItemModalProps> = ({onClose}) =>{
    const { addToItemList } = useItemList()
    const [newItemString, setNewItemString] = useState<string>("")
    const [inputError, setInputError] = useState<boolean>(false)

    const handleAddItem = () => {
        if(newItemString === ""){
            setInputError(true)
        }else{
            addToItemList({id: Date.now(), content: newItemString})
            setNewItemString("")
            onClose()
        }
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
        {inputError && <span className={`${styles.inputError}`}>You cannot enter an empty text</span>}
        <div className={`${styles.buttonsContainer}`}>
            <Button variant="primary" onClick={handleAddItem}>ADD</Button>
            <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        </div>
      </div>
    </div>
  );

  }
export default AddItemModal;