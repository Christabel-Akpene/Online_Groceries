import type { Item } from "../interfaces"
import { StyleSheet, Text, View } from 'react-native'

const ItemCard = ({name,price, scale, image}: Item) => {
  return (
    <View>
      <Text>ItemCard</Text>
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({})