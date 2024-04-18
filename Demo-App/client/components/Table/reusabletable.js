import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Image,
    ActivityIndicator,
  } from "react-native";
  import styles from "./reusable.style";

  import { useState } from "react";

  import { COLORS } from "../theme/theme";
  
  const ReusableTable = ({
    data,
    columns,
    heading,
    keyValue,
    navigation,
    update,
    isDelete,
    onRefreshgetCall,
  }) => {
    const [deleteId, SetDeleteId] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    const onEdit = (item, update, keyValue, id) => {
      navigation.navigate("addinputs", {
        item,
        isEdit: true,
        keyValue,
        update,
        id,
      });
    };
  
    const onDelete = async (id, isDelete) => {
      setIsLoading(true);
      SetDeleteId(id);
  
      let deleteUrls = {
        deleteAgent: `agent/delete/${id}`,
        deleteCustomer: `customer/delete/${id}`,
        deleteGroup: `group/delete/${id}`,
        deleteProduct: `product/delete/${id}`,
      };
  
    //   const fetchApi = await fetchData(url, method);
    //   if (fetchApi.message) {
    //     onRefreshgetCall(true);
    //     setIsLoading(false);
    //   }
    };
    // if () {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={styles.heading}>{heading}</Text>
    //       <Text>No data available</Text>
    //     </View>
    //   );
    // }
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{heading}</Text>
        {data.length > 0 ? (
          <ScrollView horizontal>
            <View style={styles.headerCell}>
              {/* Header Row */}
              <View style={styles.header}>
                {columns.map((column) => (
                  <View
                    key={column.key}
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Text style={{ color: "#fff" }}>{column.label}</Text>
                  </View>
                ))}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff" }}> Edit</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Delete</Text>
                </View>
              </View>
  
              {/* Data Rows */}
              {data.length > 0 &&
                data.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dataRow,
                      index % 2 === 0 ? styles.evenRow : styles.oddRow,
                    ]}
                  >
                    <View
                      style={{
                        flex: 1,
  
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>{index + 1}</Text>
                    </View>
  
                    {columns.map((column) => (
                      <View key={column.key} style={{ flex: 1 }}>
                        <Text>{item[column.key]}</Text>
                      </View>
                    ))}
  
                    <TouchableOpacity
                      onPress={() => onEdit(item, update, keyValue, item.id)}
                      style={{
                        flex: 1,
  
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ height: 30, width: 30 }}
                        source={require("../../assets/pencil.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => onDelete(item.id, isDelete)}
                      style={{
                        flex: 1.4,
  
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isLoading && deleteId === item.id ? (
                        <ActivityIndicator
                          style={styles.indicator}
                          size="large"
                          color={COLORS.primary}
                        />
                      ) : (
                        <Image
                          style={{ height: 30, width: 30 }}
                          source={require("../../assets/delete.png")}
                        />
                      )}
                      {/* <Text>Delete</Text> */}
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </ScrollView>
        ) : (
          <View style={styles.empty}>
            <View>
              <Image
                source={require("../../assets/emptybox.png")}
                style={styles.image}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Oops!</Text>
              <Text style={{ fontSize: 13, fontWeight: "400" }}>
                No Data Found
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("List")}
              >
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  Go to Add {heading}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };
  
  export default ReusableTable;
  