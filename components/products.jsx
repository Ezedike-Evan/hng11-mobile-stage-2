import React from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import ProductItem from './product'

const ProductItems = ({products})=>{
  return (
    <View style={styles.products}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={(item)=>(
                <ProductItem product={item}/>
            )}
        />
    </View>
  )
}

export default ProductItems

const styles = StyleSheet.create({
    products:{
        paddingHorizontal:20
    }
})