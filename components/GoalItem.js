import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
