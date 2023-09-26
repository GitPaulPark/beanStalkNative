import React, {useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import DateHead from './components/todo/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Empty from './components/todo/Empty';
import AddTodo from './components/todo/AddTodo';
import TodoList from './components/todo/TodoList';
import todoStorage from './components/todo/todoStorage';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '작업 환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  useEffect(() => {
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todoStorage.set(todos).catch(console.error);
  }, [todos]);
  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };
  const onToggle = id => {
    const nextTodo = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodo);
  };

  const onRemove = id => {
    const nextTodo = todos.filter(todo => todo.id !== id);
    setTodos(nextTodo);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.full}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.avoid}>
          <DateHead />q
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'white',
  },
  half: {
    flex: 2,
  },
  align: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avoid: {
    flex: 1,
  },
});
export default App;
