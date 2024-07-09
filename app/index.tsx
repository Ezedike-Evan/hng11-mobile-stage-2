import { FlatList, StyleSheet, View, Text } from "react-native"
import Header from '../components/header'
import ProductItems from '../components/products'
import { useEffect, useState } from "react"
import axios from 'axios'

const Index =()=>{

  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get('https://api.timbu.cloud/products', {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            organization_id: 'a3060aba5ae949209b50a5241c90d11b',
            Apikey: '7d1293658935435bbad93ee61bea931520240705123800088633',
            Appid: 'ADKW82L0QPC7AJN'
          }
        })
        setProducts(response.data.items)
      } catch (err) {
        console.log("error message is ",err)
      }
    }
    fetchData()
  },[])
  return (
    <View style={styles.container} >
      <Header />
      <ProductItems products={products} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})