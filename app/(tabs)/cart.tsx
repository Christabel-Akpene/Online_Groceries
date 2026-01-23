import { StyleSheet, Text, View, TextInput, Image, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import { useFocusEffect } from 'expo-router';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Cart
          </Text>
        </View>
        <View>
          {cartItems.map(({ id, image, price, name, scale }, index) => {
            return <CartItem key={`${index}-${id}`}  image={image} price={price} name={name} scale={scale} id={id} />;
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

