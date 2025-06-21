import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function VerticalScroll() {
  return (
    <ScrollView style={styles.container}>
      {Array.from({ length: 30 }).map((_, i) => (
        <Text style={styles.item} key={i}>Ítem #{i + 1}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    fontSize: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
