import { StyleSheet } from "react-native";
import { SIZES } from "../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 5,
    marginHorizontal: 10,
  },
  head: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#2A4D50",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  buttonText: {
    color: "#DDF0FF",
    textAlign: "center",
    fontWeight: "bold",
  },
  label: {
    fontSize: SIZES.small,
    fontWeight: "normal",
  },
});

export default styles;
