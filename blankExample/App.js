import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

 const Texto= ()=> {
      return(<Text>Hola mundo en react native</Text>

      )
    }

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button tittle="Presioname" onPress={() => alert('Hola mundo')} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
