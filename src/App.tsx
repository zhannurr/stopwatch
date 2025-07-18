import React from 'react';
import { View } from 'react-native';
import Stopwatch from './components/Stopwatch';
import StopwatchManager from './screens/StopwatchManager';


import { useFonts } from 'expo-font';



 function App() {
  const [fontsLoaded] = useFonts({
    'PixelifySans-Regular': require('../assets/fonts/PixelifySans-SemiBold.ttf'),
  });

  return <View style={{ flex: 1 }}>
    <StopwatchManager />
  </View>
}
export default App;