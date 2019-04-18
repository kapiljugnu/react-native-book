import { StyleSheet } from "react-native";

/*
 * StyleSheet Object to create the style for the current screen
 * Flexbox work similar to css flexbox
 */
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  },
  label: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 15,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    paddingLeft: 2,
  }
});
