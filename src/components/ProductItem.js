import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { colors } from "../global/colors";

const ProductItem = ({ item, navigation, route }) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Product", { id: item.id })}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />

      <Text style={width > 350 ? styles.text : styles.minText}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 20,
    height: 100,
    width: "80%",
    marginHorizontal: "10%",
  },
  text: {
    width: "80%",
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 15,
    color: colors.secondary,
  },
  minText: {
    width: "80%",
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 15,
  },
  image: {
    minWidth: 50,
    minHeight: 50,
    marginLeft: 40,
  },
});
