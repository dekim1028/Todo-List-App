import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

const TodoListItem = ({id, textValue, checked, onRemove, onToggle}) => {
  Icon.loadFont();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={20} color="#3143e8" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <Icon name="delete" size={20} color="#e33057" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoListItem;
