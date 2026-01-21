import ProductPage from "../components/productPage";
import { productSections } from "../constants/sectionedData";
import { SafeAreaView } from "react-native-safe-area-context";

const Oil = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductPage
        name={productSections.oil.name}
        data={productSections.oil.data}
      />
    </SafeAreaView>
  );
};

export default Oil;

