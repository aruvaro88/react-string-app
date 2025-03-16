import {useState} from 'react'
import {ItemListContext} from '../../context/itemContext.ts'
import {StringContainer} from '../stringContainer/stringContainer.component'
import styles from './stringAppWrapper.module.css'

export const StringAppWrapper = () =>{
    const [itemList, setItemList] = useState<Item[]>([])
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [lastState, setLastState] = useState<Item[]|null>(null)

    return(
        <div>
            <ItemListContext.Provider value={{itemList, setItemList, selectedItems, setSelectedItems, lastState, setLastState}}>
                <div className={`${styles.wrapperContainer}`}>
                <StringContainer/>
                </div>
            </ItemListContext.Provider>
        </div>
    )
}