import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {marginRight: 10},
});

const TodoInsert = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} />
      </View>
    </View>
  );
};

export default TodoInsert;
