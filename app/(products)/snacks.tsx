import ProductPage from "../components/productPage";
import { productSections } from "../constants/sectionedData";
import { SafeAreaView } from "react-native-safe-area-context";

const Snacks = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductPage
        name={productSections.snacks.name}
        data={productSections.snacks.data}
      />
    </SafeAreaView>
  );
};

export default Snacks;

