//@flow
import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
export function Main() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
