import { Stack } from "expo-router"

export default function RootLayout() {
  return (
      <Stack 
        screenOptions={{headerShown:false}} // this will remove the tab header above 
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
  )
}