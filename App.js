import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator/Navigator';
import Details from './src/Screen/Details';
import ShopPage from './src/Screen/ShopPage';

export default function App() {
  return (
    <Navigator/>
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   {/* <ShopPage/> */}
    //   <Details/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
