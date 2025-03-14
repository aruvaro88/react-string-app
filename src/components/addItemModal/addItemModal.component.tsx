import React, { useState } from 'react'
import { useItemList} from '../../hooks/useItemList.ts'
import Item from '../../models/item.model.ts'

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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Agregar un nuevo ítem</h2>
        <input
          type="text"
          placeholder="Contenido del ítem"
          value={newItemString}
          onChange={(e) => setNewItemString(e.target.value)}
        />
        <div className="modal-actions">
          <button className="primary-btn" onClick={handleAddItem}>
            Añadir
          </button>
          <button className="secondary-btn" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );

  }
export default AddItemModal;