import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function MainScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.mainScreenContainer}>
        <Text
          style={styles.mainScreenInfoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Use your camera to capture Sanskrit text and search for its meaning here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreenContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  mainScreenInfoText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  }
});
