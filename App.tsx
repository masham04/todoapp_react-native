import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, settaskItems] = useState<String[]>([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    settaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index: any) => {
    let copyitems = [...taskItems];
    copyitems.splice(index, 1);
    settaskItems(copyitems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, ind) => {
            return (
              <TouchableOpacity key={ind} onPress={() => completeTask(ind)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskwrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskwrapper: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    width: 250,
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addText: {
    fontSize: 20,
    color: "#C0C0C0",
  },
});
