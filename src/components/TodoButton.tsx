import {
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';

function TodoButton({ onAdd }: { onAdd: (todo: string) => void }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    } else {
      Alert.alert('Please enter a task');
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo..."
        placeholderTextColor="#ccc"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#202020ff',
  },
  input: {
    backgroundColor: '#fff',
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#02b7ffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TodoButton;
