import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";

function TodoList({ todos,onToggle,onRemove }) {
  return (
    <FlatList
      ItemSeparatorComponent={()=><View style={styles.separator}/>}
      style={styles.list}
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
    />

  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor:'#e0e0e0',
    height:1,
  },
});
export default TodoList;
