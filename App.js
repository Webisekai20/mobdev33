import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function TodoItem(props){
  return (
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{props.task}</Text>
      </View>
  );
}

export default function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === '') {
      return;
    }
    
    setTodoList([...todoList, { title: task }]);
    setTask('');
  };

  return (
    <View style={styles.background}>
      <Text style={{marginTop:35, marginLeft:170, fontSize:10}}>@Aldrin 2026</Text>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inline}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => { alert('New Task: ' + task); addTask(); }}>
          <Text style={{fontSize:20}}>Enter</Text>
        </TouchableOpacity>
      </View>
      {todoList.map((task, index) => {
          return(
            <TodoItem key={index} task={task.title}></TodoItem>
          )
        })
      }
      
    </View>
  );
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5cbada',
  },
  title: {
    alignItems: 'center',
    marginTop: 250,
    marginLeft: 90,
    fontSize: 50,
    fontWeight: 'bold',
  },  
  inline: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    marginTop: 20,
    marginLeft: 40,
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#DDDDDD',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#459fdb',
    padding: 8,
    borderRadius: 15,
    height: 40,
    width: 100,
    marginTop: 20,
    marginRight: 60,
  },todoItem: {
    // backgroundColor: '#d4ca9b',
    backgroundColor: '#afdc9a',
    padding: 10,
    // borderWidth: ,
    marginVertical: 5,
    marginHorizontal: 40,
    borderRadius: 15,
  },
  todoText: {
   fontSize: 20,
  }
 
});



  
  git config --global user.name "Aldrin Bonganay"