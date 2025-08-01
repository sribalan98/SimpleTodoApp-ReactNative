import { View, StyleSheet, Text } from 'react-native';
function AppHeader() {
  return (
    <>
      <View style={style.container}>
        <Text style={style.headerText}>TODO APP</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#02b7ffff',
  },

  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 60, // Center the text vertically
  },
});
export default AppHeader;
