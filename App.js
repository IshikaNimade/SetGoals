import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button, Image, Text } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [goalCount, setGoalCount] = useState(courseGoals.length);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
    setGoalCount(goalCount + 1);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    setGoalCount(goalCount - 1);
  }

  function deleteAllGoalHandler() {
    setCourseGoals([]);
    setGoalCount(0);
  }

  return (
    <View style={styles.appContainer}>
      <Image style={styles.image} source={require('./assets/goal.jpg')} />

      <Button
        title="Add New Goal"
        onPress={startAddGoalHandler}
        color="#000000"
      />

      <View style={styles.inputContainer}>
        <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      </View>

      {goalCount > 0 && (
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item, index }) => {
              return (
                <GoalItem
                  text={item.text}
                  id={item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      )}

      <View style={styles.goalCountContainer}>
        <Text style={styles.goalCountText}>
          Total Goals: {goalCount}
        </Text>
        <Button
          title="Clear All"
          onPress={deleteAllGoalHandler}
          color="#BF0000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 6,
    margin: 8,
    marginTop: 20,
    padding: 8,
    maxHeight: 8 * 50, 
    overflow: 'hidden'
  },
  image: {
    width: 300,
    height: 120,
    margin: 20,
  },
  goalCountContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  goalCountText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginRight: '40%',
  },
});
