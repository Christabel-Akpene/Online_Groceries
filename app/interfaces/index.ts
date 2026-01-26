import { ImageSourcePropType } from "react-native"

export interface Item {
    id: string,
    name: string,
    price: number,
    scale: string,
    image: ImageSourcePropType
}

export interface CartItemProp extends Item {
  quantity: number,
  increaseItemQuantity: () => void,
  decreaseItemQuantity: () => void,
  removeItem: () => void
}

export interface ItemSection {
    title: string,
    data: Item[]
}

export interface Categories{
    name: string,
    image: ImageSourcePropType,
    color: string,
    borderColor: string,
    route: string
}

export interface ProductData {
    name: string,
    data: Item[]
}