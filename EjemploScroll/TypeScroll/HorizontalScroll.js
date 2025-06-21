import React from 'react';
import { ScrollView, View } from 'react-native';

export default function HorizontalScroll() {
  return (
    <ScrollView horizontal style={{ marginTop: 50 }}>
      {['red', 'blue', 'green'].map((color, i) => (
        <View key={i} style={{ width: 100, height: 100, backgroundColor: color, margin: 10 }} />
      ))}
    </ScrollView>
  );
}
