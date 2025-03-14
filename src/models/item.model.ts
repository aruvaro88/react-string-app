export interface Item{
    id: number,
    content: string
}

export interface ItemContext{
    itemsList: Item[]
    addItem: (item: Item) => void;
    removeItem: (id: number) => void;
    undoLastAction: () => void;

}