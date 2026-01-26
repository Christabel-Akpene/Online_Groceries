import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import { useFocusEffect } from 'expo-router';
import { CartItemProp } from '../interfaces';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemProp[]>([]);

  useFocusEffect(
    useCallback(() => {
      const getCartItems = async () => {
        try {
          const storedCart = await AsyncStorage.getItem("cart");
          const cart = storedCart ? JSON.parse(storedCart) : [];
          setCartItems(cart);
        } catch (error) {
          console.log(error);
        }
      };
      getCartItems();
    }, [])
  );

  const increaseItemQuantity = async (id: string) => {
    const updatedItem = cartItems.map((item) => {
        if (item.id === id){
          return {... item, quantity: item.quantity + 1}
        }
        else{
          return item
        }
    })
    setCartItems(updatedItem);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedItem));
  }

  const decreaseItemQuantity = async (id: string) => {
    const updatedItem = cartItems.map((item) => {
      if (item.id === id){
        return {...item, quantity: item.quantity - 1}
      }
      else {
        return item;
      }
    })
    .filter(item => item.quantity > 0)
    setCartItems(updatedItem);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedItem));

  }

  const removeItem = async (id: string) => {
    const updatedItem = cartItems.filter((item) => {
      return item.id !== id
    })
    setCartItems(updatedItem);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedItem));

  }


  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Cart
          </Text>
        </View>
        <View>
          {cartItems.map(({ id, image, price, name, scale, quantity }, index) => {
            return <CartItem key={`${index}-${id}`}  image={image} price={price} name={name} scale={scale} id={id} quantity={quantity} increaseItemQuantity={()=>increaseItemQuantity(id)} decreaseItemQuantity={()=>decreaseItemQuantity(id)} removeItem={()=>removeItem(id)} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginVertical: 12,
  },
});

