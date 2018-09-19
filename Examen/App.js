import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { DrawerNav } from './src/DrawerNav';
import Dialog from './com/DialogIn';
import { Header } from "react-native-elements";


export default class Checked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      shoWdialog: false,
      cont : 1,
      loading: true
    };
    this.shoWdialogs = this.shoWdialogs.bind(this);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  shoWdialogs()
  {
    if(this.state.shoWdialog)
    {
      this.setState(
        {
          shoWdialog : false
        }
      )
    }else
    {
      this.setState(
        {
          shoWdialog : true
        }
      )
    }
  }
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

  sendInput = inputText => {
    this.setState(
      {
        shoWdialog : false
      }
    )
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

    render() {
      if (this.state.loading) {
        return (
          <View style={{ flex: 1}}>
          <Header
            centerComponent={{
              text: "Todo Task",
              style: { color: "#fff", fontSize: 20 }
            }}
            backgroundColor="#694fad"
          />
          <DrawerNav />
          <ActionButton
            buttonColor="#9328B0"
            offsetY = {65}
            onPress={() => {
              this.setState({
                shoWdialog : true
              })}}
          />
          {this.state.shoWdialog  && <Dialog isVisible = {this.shoWdialogs} in = {this.sendInput}/>}
          </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });