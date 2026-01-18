import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from "@expo/vector-icons/Feather";
const carrotImage = require("@/assets/images/carrot2.png");
const bannerImage = require("@/assets/images/banner.png");
import { sectionedData } from '@/app/constants/sectionedData';

const Shop = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 12 }}>
        <View style={{flex: 1}}>
          <View style={styles.carrotImageContainer}>
            <Image
              source={carrotImage}
              style={styles.carrotImage}
            />
          </View>
          <View style={styles.search}>
            <View>
              <Feather name="search" size={20} color="black" />
            </View>
            <TextInput placeholder="Search Store" />
          </View>
          <View style={{}}>
            <Image source={bannerImage} resizeMode='contain' style={styles.bannerImage}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Shop

const styles = StyleSheet.create({
  carrotImageContainer: {
    width: 28,
    height: 28,
    alignSelf: "center",
    marginVertical: 12,
  },
  carrotImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  search: {
    flexDirection: "row",
    gap: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#e5e6e5",
    alignItems: "center",
    borderRadius: 8,
  },
  bannerImage: {
    width: Dimensions.get("window").width - 24,
    marginVertical: 20
  }
});