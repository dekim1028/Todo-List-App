import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
