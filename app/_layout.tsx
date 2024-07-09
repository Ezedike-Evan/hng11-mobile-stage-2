import { Stack } from "expo-router"
import { CartProvider } from "../context/cartContext"

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{headerShown:false}} >
        <Stack.Screen name="index" />
      </Stack>
    </CartProvider> 
  );
}
