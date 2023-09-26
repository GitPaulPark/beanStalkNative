import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from "react-native";
import DateHead from "./DateHead";
import Empty from "./Empty";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import todoStorage from "./todoStorage";
import { SafeAreaProvider } from "react-native-safe-area-context";

// const androidSpec = {
//   androidParams: {
//     KEY_PARAM_PAN: -1,
//     KEY_PARAM_VOLUME: 0.5,
//     KEY_PARAM_STREAM: 'STREAM_MUSIC',
//   },
// };
// const iosSpec = {
//   iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
//   rate: 0.5,
// };

function HomeTodo() {
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
    if (todos) {
      const nextId =
        todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
      const todo = {
        id: nextId,
        text,
        done: false,
      };
      setTodos(todos.concat(todo));
    }
  };

  const onToggle = id => {
    const nextTodo = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodo);
  };

  const onRemove = async id => {
    const index = todos.findIndex(todo => todo.id === id);
    console.log('todo index', index);
    const text = todos[index].text;
    console.log('text is : ', text);

    // ConvertToSpeech(text);
    //
    // try {
    //   Tts.getInitStatus().then(() => {
    //     Tts.setDucking(true);
    //     Tts.speak('Hello, world!');
    //   });
    // } catch (e) {
    //   console.log(e);
    // }

    // const requests = {
    //   req: text,
    // };
    // await axios
    //   .post('http://localhost:8000/piper', requests)
    //   .then(r => {
    //     console.log(r);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });

    const nextTodo = todos.filter(todo => todo.id !== id);
    setTodos(nextTodo);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.full}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead />
          {todos && todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default HomeTodo;
const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'white',
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
