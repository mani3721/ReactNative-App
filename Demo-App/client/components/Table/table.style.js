import { StatusBar, StyleSheet } from "react-native";
import { SIZES } from "../theme/theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
    height: "100%",
  },
  indicator: {
    marginTop: SIZES.medium,
  },
  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    padding: 10,
  },
});

export default styles;
