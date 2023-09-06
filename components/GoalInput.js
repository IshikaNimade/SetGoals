import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.jpg')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title="Add Goal" onPress={addGoalHandler} color='#000000'/></View>
        <View style={styles.button}><Button title='Cancel' onPress={props.onCancel} color='#BF0000'/></View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    padding: 16,
    borderRadius: 6,
  },
  buttonContainer:{
    flexDirection: 'row',
    margin: 20,
  },
  button:{
    width:'30%',
    marginHorizontal: 8
  },
  image:{
    width:300,
    height:120,
    margin:20,
  }
});
