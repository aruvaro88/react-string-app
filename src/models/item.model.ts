export interface Item{
    id: number,
    content: string
}

export interface ItemContext {
    itemList: Item[];
    setItemList: (items: Item[]) => void;
    selectedItems: number[];
    setSelectedItems: (items: number[]) => void;
    lastState: Item[] | null;
    setLastState: (items:Item[] | null) => void
}