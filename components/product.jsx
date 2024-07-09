import React , {useContext} from 'react'
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native'
import { CartContext } from '../context/cartContext'
import { router } from 'expo-router'


const ProductItem = ({product})=>{
    const { addToCart } = useContext(CartContext)

    return (
        <View style={styles.product}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={product.item.photos}
                renderItem={(item)=>(
                    <View  showsVerticalScrollIndicator={false}>
                        <Image 
                            source={{
                                uri : `https://api.timbu.cloud/images/${item.item.url}`
                            }}
                            style={{
                                width:80,
                                height:80
                            }}
                        />
                    </View>
                )}
            />
            <Text style={styles.productName}>{product.item.name}</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={()=>{
                    addToCart(product)
                    router.push('/product-info')

                }}
            >
                <Text style={styles.buttonText}>
                    View more
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    product:{
        marginVertical:10,
        paddingHorizontal:15,
        paddingVertical:5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent : 'space-between'
    },
    productName:{
        fontSize: 18,
        flexWrap:'wrap',
        width:'45%',
        textAlign:'center',
        fontWeight:'700'
    },
    button:{
        backgroundColor: '#007bff',
        padding: 7,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'700',
        textTransform:'capitalize'
    }
})