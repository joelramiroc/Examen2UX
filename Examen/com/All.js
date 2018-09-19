import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import ListItem from "./List";

export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOpen = () => {
    this.props.navigation.openDrawer();
  };

  handleAdd = dialog => {
    this.props.screenProps.showDialog(dialog);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor="#191919"
          leftComponent={
            <Icon.Button
              name="bars"
              size={15}
              backgroundColor="transparent"
              onPress={() => this.handleOpen()}
            />
          }

          centerComponent={{ text: "Joel Task", style: { color: "#fff" } }}
          rightComponent={
            <Icon.Button
              name="plus"
              size={15}
              backgroundColor="transparent"
              onPress={() => this.handleAdd(true)}
            />
          }
        />
        <FlatList
          data={this.props.screenProps.todos}
          renderItem={({ item }) => (
            <ListItem
              task={item}
              toggleCheck={this.props.screenProps.toggleCheck}

            />
          )}
          keyExtractor={(item, index) => item.id}
          style={{ flex: 1, marginTop: 20, width: "100%" }}
        />
      </View>
    );
  }
}
