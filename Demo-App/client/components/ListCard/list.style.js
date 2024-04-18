import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../theme/theme";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingTop: 20,
  },
  homeView: {
    marginTop: StatusBar.currentHeight || 0,
    height: "100%",
  },
  imageHead: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  images: {
    width: 240,
    height: 240,
  },

  listCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  ListData: {
    width: "90%",
  },
  title: {
    fontSize: 18,
  },
});

export default styles;
