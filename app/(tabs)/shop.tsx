import { Dimensions, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from "@expo/vector-icons/Feather";
import { sectionedData } from '@/app/constants/sectionedData';
import ItemCard from '../components/ItemCard';
import { ItemSection } from "../interfaces";

const carrotImage = require("@/assets/images/carrot2.png");
const bannerImage = require("@/assets/images/banner.png");

const Shop = () => {

  const renderSection = ({section}: {section: ItemSection}) => {
    return (
      <View style={{marginVertical: 12}}>
        <Text style={{fontWeight: "500", fontSize: 18, marginBottom: 8}}> {section.title} </Text>
        <ScrollView contentContainerStyle={{gap: 16}} horizontal showsHorizontalScrollIndicator={false}>
          {section.data.map((item) => {
            return (
              <ItemCard key={item.id} price={item.price} name={item.name} scale={item.scale} image={item.image} id={item.id} />
            )
          })}
        </ScrollView>
      </View>
    )
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <View style={styles.carrotImageContainer}>
          <Image source={carrotImage} style={styles.carrotImage} />
        </View>
        <View style={styles.search}>
          <View>
            <Feather name="search" size={20} color="black" />
          </View>
          <TextInput placeholder="Search Store" />
        </View>
        <View style={{}}>
          <Image
            source={bannerImage}
            resizeMode="contain"
            style={styles.bannerImage}
          />
        </View>
      </>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          sections={sectionedData}
          renderItem={() => null}
          keyExtractor={(item) => item.id}
          renderSectionHeader={renderSection}
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={{padding: 12}}
        />
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