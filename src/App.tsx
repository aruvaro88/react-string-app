import ItemList from "./components/itemList/itemList.component.tsx"
import { StringContainer } from "./components/stringContainer/stringContainer.component.tsx"

export const App: React.FC = () => {
  return (
    <div>
      <StringContainer>
        <ItemList />
      </StringContainer>
    </div>
  )
}
