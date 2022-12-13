import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login'
import Profile from './src/screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Profile /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});



