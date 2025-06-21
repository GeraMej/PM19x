import React, { useState } from 'react';
import { ScrollView, Text, RefreshControl } from 'react-native';

export default function PullToRefresh() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={{ padding: 20, fontSize: 18 }}>Desliza hacia abajo para refrescar</Text>
    </ScrollView>
  );
}
