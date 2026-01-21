import ProductPage from "../components/productPage";
import { productSections } from "../constants/sectionedData";
import { SafeAreaView } from "react-native-safe-area-context";

const Meat = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductPage
        name={productSections.meat.name}
        data={productSections.meat.data}
      />
    </SafeAreaView>
  );
};

export default Meat;
