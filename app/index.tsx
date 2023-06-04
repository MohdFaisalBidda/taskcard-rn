import { Platform, StyleSheet } from 'react-native';
import { useRouter, useNavigation, SplashScreen, Stack } from 'expo-router';
import { Box, Flex, Input, ScrollView, VStack } from 'native-base';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { AntDesign } from '@expo/vector-icons';
import TrendingSection from '../components/Section/Home/TrendingSection';
import PopularRecipeSection from '../components/Section/Home/PopularRecipeSection';
import CategoriesSection from '../components/Section/Home/CategoriesSection';
import SafeAreaBox from '../components/Container/SafeAreaBox';

type Props = {};

const Index = (props: Props) => {
  const navigation = useNavigation();
  console.log(navigation.getId());

  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'YesevaOne-Regular': require('../assets/fonts/YesevaOne-Regular.ttf')
    // 'Rubik-Bold': require('../../../assets/fonts/Rubik-Bold.ttf'),
    // 'Rubik-SemiBold': require('../../../assets/fonts/Rubik-SemiBold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaBox>
      <ScrollView>
        {/* <Stack.Screen options={{ headerShown: false, statusBarTranslucent: false }} /> */}
        <VStack mb={2} style={{ gap: 15 }}>
          <Box px={3} height={50}>
            <Flex
              flexDir={'row'}
              bgColor={'trueGray.300'}
              pl={3}
              borderRadius={'lg'}
              borderColor='trueGray.200'
              borderWidth={1}
            >
              <VStack mr={1} alignItems={'center'} justifyContent={'center'}>
                <AntDesign name='search1' size={24} color='rgb(71,85,75)' />
              </VStack>
              <Box height={'100%'} flex={1}>
                <Input
                  height={'100%'}
                  colorScheme={'black'}
                  fontFamily={'Rubik'}
                  // outlineStyle={'none'}
                  // outlineColor={'gold'}
                  focusOutlineColor={'trueGray.300'}
                  bgColor={'trueGray.300'}
                />
              </Box>
            </Flex>
          </Box>
          <TrendingSection />
          <CategoriesSection />
          <PopularRecipeSection />
          <TrendingSection />
          <PopularRecipeSection />
        </VStack>
      </ScrollView>
    </SafeAreaBox>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    // paddingBottom: 15
  },
  flex: {
    flex: 1,
    // alignItems: 'stretch',
    gap: 10,
    overflow: 'scroll'
  },
  button: {
    ...Platform.select({
      ios: {},
      android: {
        elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#2196F3',
        borderRadius: 2
      }
    })
  },
  buttonText: {
    textAlign: 'center',
    margin: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        fontSize: 18
      },
      android: {
        color: 'white',
        fontWeight: '500'
      }
    })
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
