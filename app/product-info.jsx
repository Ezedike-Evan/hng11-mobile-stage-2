import React, { useContext } from 'react'
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { CartContext } from '../context/cartContext'
import { router } from 'expo-router'

const ProductInfo = ()=>{
  const { cart , clearCart } = useContext(CartContext)

  return (
    <View style={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={cart.item.photos}
            renderItem={(item)=>(
                <View  showsVerticalScrollIndicator={false}>
                    <Image 
                        source={{
                            uri : `https://api.timbu.cloud/images/${item.item.url}`
                        }}
                        style={{
                            width:280,
                            height:280
                        }}
                    />
                </View>
            )}
        />
        <Text style={styles.productName}>{cart.item.name}</Text>
        <Text style={styles.productDesc}>{cart.item.description}</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={cart.item.current_price}
            renderItem={(item)=>(
                <Text style={styles.productPrice}>Price : ${item.item.USD[0]}</Text>
            )}
        />
    </View>
  )
}

export default ProductInfo

const styles = StyleSheet.create({
    container:{
        alignItems : 'center',
        padding : 30
    },
    productName:{
        color:'black',
        fontSize:28,
        marginVertical : 5,
        fontWeight:'700',
    },
    productDesc:{
        color:'black',
        fontSize:18,
    },
    productPrice:{
        color:'black',
        fontSize:23,
        marginVertical : 5,
        fontWeight:'700'
    }
})