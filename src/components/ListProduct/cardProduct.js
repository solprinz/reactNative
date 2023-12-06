import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const CardProduct = ({ item, handlerModal }) => {
  return (
    <View>
      <View style={styles.cardProduct}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>${item.price}</Text>
        <Button title="Eliminar" onPress={() => handlerModal(item)} />
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  cardProduct: {
    margin: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 20,
  },
  text: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
});