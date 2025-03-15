import { useEffect, useState} from 'react'
import styles from './stringContainer.module.css'
import Button from "../button/button.component"
import { useItemList } from '../../hooks/useItemList.ts'
import ItemList  from '../itemList/itemList.component'
import AddItemModal from '../addItemModal/addItemModal.component'

export const StringContainer = () =>{
    const { itemList, removeFromItemList, selectedItems, undoAction } = useItemList()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDelete = () => {
        console.log('selectedItems', selectedItems)
        removeFromItemList(selectedItems)
    };

     const handleAddItemClick = () => {
    setIsModalVisible(true); 
  };

  const handleUndo = () =>{
    undoAction()
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
    
    return(<div className={`${styles.stringContainer}`}>
        <div className={`${styles.titleContainer}`}>
            <span className={`${styles.header}`}>This is a technical proof</span>
            <span className={`${styles.subHeader}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla at mauris ac maximus. Nunc id auctor ligula. Sed vel neque sit amet lacus porttitor dapibus vehicula vitae ligula. Nulla convallis enim felis, quis tempus nunc convallis eu. Praesent non porttitor arcu. Nunc lorem ipsum, sollicitudin at lorem et, auctor pharetra mi. In in elementum nulla. In hac habitasse platea dictumst. Vestibulum lobortis lorem ac sodales tempor. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec odio metus, blandit eget dui vitae, pretium feugiat augue. Phasellus facilisis elit nulla, 
                sed egestas mauris aliquet et. Nam ac lacus mauris.</span>
        </div>
         <div className={`${styles.itemListContainer}`}>
            <ItemList/>
        </div>
        <div className={`${styles.buttonsContainer}`}>
        <div className={`${styles.secondaryButtons}`}>
            <Button variant="secondary" onClick={handleUndo}>Undo</Button>
            <Button variant="secondary" onClick={handleDelete}>Eliminar</Button>
        </div>
        <Button variant="primary" onClick={handleAddItemClick}>Añadir</Button>
        </div>
        {isModalVisible && <AddItemModal onClose={handleCloseModal}/>}
    </div>)
}

