import { StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainScreenInfo from '../components/MainScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function MainScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={()=>{console.log("Open camera")}}>
        <View style={styles.searchContainer}>
          <Ionicons name="camera" size={32} color="white" />
          <Text style={styles.title}>Search</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MainScreenInfo path="/screens/MainScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#009dff',
    padding: 5,
    borderRadius: 10,
    width: 110
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
