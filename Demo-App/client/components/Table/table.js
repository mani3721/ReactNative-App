import {
    ActivityIndicator,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    Text,
    View,
  } from "react-native";
  import styles from "./table.style";
  import ReusableTable from "./reusabletable";
  import { useCallback, useEffect, useState } from "react";
  import { COLORS } from "../theme/theme";
  import ScreenHeaderBtn from "../header/header";
  import axios from "axios";
  import { API_URL } from "../config/config";


  
  const Table = ({ route, navigation }) => {
    let { keyValue, title, update, isDelete } = route.params;
    const [getCall, setCall] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [tableData, setTableData] = useState([]);
  
  
    const fetchValue = async () => {
        console.log("call");
        try {
          const response = await axios.get(`${API_URL}/api/users`);
          setTableData(response.data);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
    useEffect(() => {
      setIsLoading(true);
      setRefreshing(false);
      fetchValue();
    }, [refreshing, getCall]);
  
    useEffect(() => {
      setIsLoading(true);
      setRefreshing(true)
    }, []);
  
    const columnsFromResponse =
      tableData && tableData.length > 0 ? Object.keys(tableData[0]) : [];
    const excludedKeys = [
      "createdAt",
      "updatedAt",
      // "group_id",
      // "companyId",
      "id",
    ];
    const tableColumns = [
      { key: "sno", label: "SNO" },
      ...columnsFromResponse
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => ({
          key,
          label: key.charAt(0).toUpperCase() + key.slice(1),
        })),
    ];
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
    }, []);
  
    const handleSubmit = () => {
      navigation.goBack();
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ScreenHeaderBtn
            iconUrl={require("../../assets/icons/left.png")}
            dimension="60%"
            handlePress={() => handleSubmit()}
          />
          <ScreenHeaderBtn
            iconUrl={require("../../assets/kemal.jpg")}
            dimension="100%"
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator
              style={styles.indicator}
              size="large"
              color={COLORS.primary}
            />
          ) : error ? (
            <View style={styles.error}>
              <Text>Something went wrong</Text>
            </View>
          ) : (
            <ReusableTable
              heading={route.params.TableName}
              data={tableData}
              columns={tableColumns}
              keyValue={keyValue}
              title={title}
              navigation={navigation}
              update={update}
              isDelete={isDelete}
              onRefreshgetCall={() => setCall(!getCall)}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Table;
  