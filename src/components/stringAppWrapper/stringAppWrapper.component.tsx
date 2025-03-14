import {useState} from 'react'
import {ItemListContext} from '../../context/itemContext.ts'
import {StringContainer} from '../stringContainer/stringContainer.component'
import styles from './stringAppWrapper.module.css'

export const StringAppWrapper = () =>{
    const [itemList, setItemList] = useState<Item[]>([])

    return(
        <div>
            <ItemListContext.Provider value={{itemList, setItemList}}>
                <div className={`${styles.wrapperContainer}`}>
                <StringContainer/>
                </div>
            </ItemListContext.Provider>
        </div>
    )
}