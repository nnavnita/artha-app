import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import MainScreenInfo from '../components/MainScreenInfo';
import { Text, View } from '../components/Themed';

export default function InstructionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MainScreenInfo path="/screens/InstructionsScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the Instructions */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
