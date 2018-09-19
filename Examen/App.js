import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { DrawerRaiz } from './src/DrawerNav';
import DialogInput from "react-native-dialog-input";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", todo: "Inserte tarea", checked: true }],
      dialog: false,
      cont: 1
    };
  }

  sendInput = inputText => {
    this.setState({ dialog: false });
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

  showDialog = dialog => {
    this.setState({ dialog: dialog });
  };

  toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DrawerRaiz
          screenProps={{
            todos: this.state.todos,
            toggleCheck: this.toggleCheck,
            showDialog: this.showDialog
          }}
        />
        <DialogInput
          isDialogVisible={this.state.dialog}
          title={"Inserte una tarea"}
          hintInput={"Escriba nueva tarea"}
          submitInput={inputText => {
            this.sendInput(inputText);
          }}
          closeDialog={() => {
            this.showDialog(false);
          }}
        />
      </View>
    );
  }
}

