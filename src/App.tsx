import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import AppHeader from './components/AppHeader';
import Body from './components/Body';
import TodoButton from './components/TodoButton';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
    }
  };
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppHeader />
      <Body todos={todos} onDelete={deleteTodo} />
      <TodoButton onAdd={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
