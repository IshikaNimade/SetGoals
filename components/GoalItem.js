import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return(
        <View style={styles.goalItem}>
        <Pressable 
        android_ripple={{color: 'white'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
        </View>
    );
}

export default GoalItem;


const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#BF0000',
      },
      goalText:{
        color:'white',
        padding:16,
      },
      pressedItem:{
        opacity: 0.5,
      }
});