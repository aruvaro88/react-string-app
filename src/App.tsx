import { useState } from "react"
import { StringContainer } from "./components/stringContainer/stringContainer.component.tsx"
import { ItemListContext } from "./context/itemContext.ts"
import { Item } from "./models/item.model.ts"

export const App: React.FC = () => {
  const [itemList, setItemList] = useState<Item[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [lastState, setLastState] = useState<Item[] | null>(null)

  return (
    <div>
      <ItemListContext.Provider value={{ itemList, setItemList, selectedItems, setSelectedItems, lastState, setLastState }}>
        <StringContainer />
      </ItemListContext.Provider>
    </div>
  )
}
