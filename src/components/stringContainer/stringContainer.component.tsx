import { useEffect, useState} from 'react'
import styles from './stringContainer.module.css'
import Button from "../button/button.component"
import { useItemList } from '../../hooks/useItemList.ts'
import ItemList  from '../itemList/itemList.component'
import AddItemModal from '../addItemModal/addItemModal.component'

export const StringContainer = () =>{
    const { itemList, removeFromItemList } = useItemList()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDelete = () => {
        removeFromItemList()
    };

     const handleAddItemClick = () => {
    setIsModalVisible(true); 
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
    
    return(<div className={`${styles.stringContainer}`}>
        <div className={`${styles.titleContainer}`}>
            <span>This is a technical proof</span>
            <span>Lorem impsum</span>
        </div>
         <div>
            <ItemList/>
        </div>
        <div className={`${styles.buttonsContainer}`}>
        <div>
            <Button variant="secondary" onClick={handleDelete}>Undo</Button>
            <Button variant="secondary" onClick={handleDelete}>Eliminar</Button>
        </div>
        <Button variant="primary" onClick={handleAddItemClick}>Añadir</Button>
        </div>
        {isModalVisible && <AddItemModal onClose={handleCloseModal}/>}
    </div>)
}

