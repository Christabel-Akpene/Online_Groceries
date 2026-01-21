import ProductPage from '../components/productPage'
import { productSections } from '../constants/sectionedData'
import { SafeAreaView } from 'react-native-safe-area-context'

const Fruits = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProductPage name={productSections.fruitsAndVegetables.name} data={productSections.fruitsAndVegetables.data} />
    </SafeAreaView>
  )
}

export default Fruits

