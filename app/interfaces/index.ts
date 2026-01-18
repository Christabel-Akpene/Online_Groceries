export interface Item {
    id?: string,
    name: string,
    price: number,
    scale: string,
    image: string
}

export interface ItemSection {
    title: string,
    data: Item[]
}