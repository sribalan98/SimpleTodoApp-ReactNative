import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Body({
  todos,
  onDelete,
}: {
  todos: string[];
  onDelete: (index: number) => void;
}) {
  return (
    <View style={style.container}>
      {todos.map((todo, index) => {
        return (
          <View
            style={style.todocard}
            key={index}
            // onMagicTap={() => console.log('Tapped!')}
          >
            <Text style={style.todoItem}>{todo}</Text>
            <TouchableOpacity
              style={style.deletebutton}
              onPress={onDelete.bind(null, index)}
            >
              <Text style={style.deleteText}>X</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#202020ff',
  },
  todoItem: {
    color: '#202020ff',
    fontSize: 18,
    paddingVertical: 5,
  },

  todocard: {
    width: '100%',
    backgroundColor: '#009cb8ff',
    padding: 10,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  deletebutton: {
    width: 30,
    height: 30,
    backgroundColor: '#ff0000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  deleteText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Body;
