import { useState } from "react";

import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./list.style";
import ScreenHeaderBtn from "../header/header";

const List = ({ navigation, route }) => {
  const [ListData, setListData] = useState([
    {
      title: "Add Agent",
      key: "addAgent",
      TableName: "Agent Details",
      update: "updateAgent",
      isDelete: "deleteAgent",
    },
  ]);

  const Item = ({ title, keyValue, TableName, update, isDelete }) => (
    <TouchableOpacity
      key={keyValue}
      style={styles.item}
      onPress={() =>
        navigation.navigate("addinputs", {
          title,
          keyValue,
          TableName,
          isEdit: false,
          update,
          isDelete,
        })
      }
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.header}>
        <ScreenHeaderBtn
          iconUrl={require("../../assets/icons/left.png")}
          dimension="60%"
          handlePress={() => navigation.navigate("DashBoard")}
        />
        <ScreenHeaderBtn
          iconUrl={require("../../assets/kemal.jpg")}
          dimension="100%"
        />
      </View>

      <View style={styles.imageHead}>
        <Image
          source={require("../../assets/icons/list.png")}
          style={styles.images}
        />
      </View>
      <View style={styles.listCard}>
        <FlatList
          data={ListData}
          style={styles.ListData}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              keyValue={item.key}
              TableName={item.TableName}
              update={item.update}
              isDelete={item.isDelete}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;
