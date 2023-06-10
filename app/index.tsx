import { SplashScreen, useNavigation } from 'expo-router'
import { ScrollView, VStack } from 'native-base'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import TrendingSection from '../components/Section/Home/TrendingSection'
import PopularRecipeSection from '../components/Section/Home/PopularRecipeSection'
import CategoriesSection from '../components/Section/Home/CategoriesSection'
import SafeAreaBox from '../components/Container/SafeAreaBox'
import StyledSearchbar from '../components/searchbar/StyledSearchbar'

// type Props = {}

const Index = () => {
  const navigation = useNavigation()
  console.log(navigation.getId())

  const [fontsLoaded] = useFonts({
    'YesevaOne-Regular': require('../assets/fonts/YesevaOne-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  // const [isContentLoaded, setContentLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setContentLoaded(true), 300);
  // }, []);

  return (
    <SafeAreaBox>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Stack.Screen options={{ headerShown: false, statusBarTranslucent: false }} /> */}
        <VStack mb={2} style={{ gap: 15 }}>
          <StyledSearchbar />
          <TrendingSection />
          <CategoriesSection />
          <PopularRecipeSection />
          <TrendingSection />
          <PopularRecipeSection />
        </VStack>
      </ScrollView>
    </SafeAreaBox>
  )
}

export default Index

// const styles = StyleSheet.create({
//   container: {
//     // paddingTop: 15,
//     // paddingBottom: 15
//   },
//   flex: {
//     flex: 1,
//     // alignItems: 'stretch',
//     gap: 10,
//     overflow: 'scroll',
//   },
//   button: {
//     ...Platform.select({
//       ios: {},
//       android: {
//         elevation: 4,
//         // Material design blue from https://material.google.com/style/color.html#color-color-palette
//         backgroundColor: '#2196F3',
//         borderRadius: 2,
//       },
//     }),
//   },
//   buttonText: {
//     textAlign: 'center',
//     margin: 8,
//     ...Platform.select({
//       ios: {
//         // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
//         color: '#007AFF',
//         fontSize: 18,
//       },
//       android: {
//         color: 'white',
//         fontWeight: '500',
//       },
//     }),
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// })
