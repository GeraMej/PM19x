import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ejemplo de ScrollView</Text>

      {/* Agregamos varios elementos para demostrar el scroll */}
      {Array.from({ length: 30 }).map((_, i) => (
        <View key={i} style={styles.item}>
          <Text style={styles.itemText}>Elemento #{i + 1}</Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#d1c4e9',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});
