import ProductPage from "../components/productPage";
import { productSections } from "../constants/sectionedData";
import { SafeAreaView } from "react-native-safe-area-context";

const Dairy = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductPage
        name={productSections.dairy.name}
        data={productSections.dairy.data}
      />
    </SafeAreaView>
  );
};

export default Dairy;
