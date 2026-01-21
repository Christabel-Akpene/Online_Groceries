import ProductPage from "../components/productPage";
import { productSections } from "../constants/sectionedData";
import { SafeAreaView } from "react-native-safe-area-context";

const Beverages = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductPage
        name={productSections.beverages.name}
        data={productSections.beverages.data}
      />
    </SafeAreaView>
  );
};

export default Beverages;
