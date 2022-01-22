import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function HistoryScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.mainScreenContainer}>
        <Text
          style={styles.mainScreenInfoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Your previously searched words and their meanings will appear here.
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
