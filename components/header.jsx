import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ()=>{
  return (
    <View style={styles.header}>
        <Text style={styles.text}>
            Product List
        </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:'blue',
        height:170,
        justifyContent:'flex-end',
        paddingHorizontal:30,
        paddingVertical:10,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        marginBottom:5
    },
    text:{
        color:'white',
        fontSize:40,
        fontWeight:'900',
        textTransform:'uppercase'
    }
})