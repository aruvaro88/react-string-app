import {useState} from 'react'
import {ItemListContext} from '../../context/itemContext.ts'
import {StringContainer} from '../stringContainer/stringContainer.component'
import styles from './stringAppWrapper.module.css'

export const StringAppWrapper = () =>{
    const [itemList, setItemList] = useState<Item[]>([])
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    return(
        <div>
            <ItemListContext.Provider value={{itemList, setItemList, selectedItems, setSelectedItems}}>
                <div className={`${styles.wrapperContainer}`}>
                <StringContainer/>
                </div>
            </ItemListContext.Provider>
        </div>
    )
}