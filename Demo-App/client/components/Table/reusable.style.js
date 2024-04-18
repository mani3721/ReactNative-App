import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",
    gap: 15,
  },
  headerCell: {
    backgroundColor: "yellow",
    flexDirection: "column",
    width: 850,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#17114e",
    borderRadius: 5,
    alignItems: "center",

    justifyContent: "space-around",
  },
  tableHeading: {
    padding: 10,
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-around",

    padding: 10,
  },
  evenRow: {
    backgroundColor: "#f7f8fa",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // table: {
  //   flexDirection: "column",
  // },
  // headerRow: {
  //   flexDirection: "row",
  //   backgroundColor: "#3498DB",
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#2980b9",
  // },
  // headerCell: {
  //   flex: 1,
  //   padding: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // borderColor:'black',
  //   // borderWidth:10,
  //   width: 220,
  // },
  // headerText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  //   paddingHorizontal: 50,

  //   // backgroundColor:"white"
  // },
  // dataRow: {
  //   flexDirection: "row",
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ECF0F1",
  //   backgroundColor: "#fff",
  //   display: "flex",

  //   //  gap:10
  // },
  // dataCell: {
  //   flex: 1,
  //   padding: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "yellow",
  //   // borderColor:"red",

  //   // borderWidth:10
  // },
  // dataText: {
  //   color: "#333",
  //   // paddingHorizontal:50,
  //   // backgroundColor:"red",
  // },
  // editButton: {
  //   // backgroundColor: "#2ecc71",
  // },
  // deleteButton: {
  //   // backgroundColor: "#e74c3c",
  // },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red", // You can customize the text color
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: "#f57429",
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  // sno: {
  //   width: "13%",
  //   alignItems: "flex-end",
  //   justifyContent: "center",
  // },
  // row: {
  //   flexDirection: "row",

  //   justifyContent: "space-evenly",

  //   width: "50%",
  // },
});
export default styles;
