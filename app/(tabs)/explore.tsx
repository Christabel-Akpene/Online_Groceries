import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { categories } from '../constants/sectionedData';

const Explore = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>Find Products</Text>
        </View>
        <View style={styles.search}>
          <View>
            <Feather name="search" size={20} color="black" />
          </View>
          <TextInput placeholder="Search Store" />
        </View>
        <View style={styles.contentContainer}>
          {categories.map(({ name, image, color, borderColor }, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.content,
                  { borderColor: borderColor, backgroundColor: color },
                ]}
              >
                <Image source={image} />
                <Text style={{ fontWeight:"bold" }}>{name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Explore

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginVertical: 12,
  
  },
  search: {
    flexDirection: "row",
    gap: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#e5e6e5",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 12
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 24,
  },
  content: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height:150,
  
  }
});