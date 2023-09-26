import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';
const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem('todos');
      if (!rawTodos) {
        throw new Error('no saved todos');
      }
      return JSON.parse(rawTodos);
    } catch (e) {
      console.log('Failed to load todos');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(data));
    } catch (e) {
      console.log('Failed to save todos');
    }
  },
};
export default todoStorage;
