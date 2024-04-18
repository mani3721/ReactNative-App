import { SafeAreaView, ScrollView, View } from "react-native";
import ReusableInput from "../reusableinput/reusableinput";
import styles from "./addinput.style";
import ScreenHeaderBtn from "../header/header";
import axios from "axios";
import { API_URL } from "../config/config";

const AddInputs = ({ route, navigation }) => {
  let { keyValue, title, TableName, item, id, isEdit, update, isDelete } =
    route.params;

  const handleFormSubmit = async (inputValues) => {
  
    try {
        await axios.post(`${API_URL}/api/users`, inputValues);
    } catch (error) {
        console.log(error);
    }
    
    navigation.navigate("Table", {
      TableName,
      keyValue,
      title,
      update,
      isDelete,
    });
  };

  const handleSubmit = () => {
    navigation.goBack();
  };

  const getLabelNames = (keyValue) => {
    switch (keyValue) {
      case "addAgent":
        return [
          "User Name",
          "Company Name",
          "Address",
          "Mail ID",
          "Mobile Number",
          "Group",
        ];
      case "addCustomer":
        return [
          "Customer Name",
          "Door No / Flat No",
          "Address",
          "Mail ID",
          "Mobile Number",
          "Group",
        ];
      case "addProduct":
        return ["Product Name", "Category", "Group"];
      case "addGroup":
        return ["Group Name"];
      default:
        return [];
    }
  };

  const changeDynamicInputs = (inputType) => {
    switch (inputType) {
      case "addAgent":
        return [
          { name: "username", placeholder: "User Name" },
          { name: "companyName", placeholder: "Company Name" },
          { name: "address", placeholder: "Address" },
          { name: "email", placeholder: "Mail ID" },
          { name: "mobileNumber", placeholder: "Mobile Number" },
          // {
          //   name: "group_id",
          //   type: "dropdown",
          //   placeholder: "Group",
          //   options: options,
          // },
        ];
      case "addCustomer":
        return [
          { name: "customerName", placeholder: "Customer Name" },
          { name: "doorNo", placeholder: "Door No / Flat No" },
          { name: "address", placeholder: "Address" },
          { name: "email", placeholder: "Mail ID" },
          { name: "mobileNumber", placeholder: "Mobile Number" },
        ];

      default:
        return [];
    }
  };
  let labelNames = getLabelNames(keyValue);
  let changeDynamic = changeDynamicInputs(keyValue);

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
      <View style={styles.head}>
        <ReusableInput
          title={route.params.title}
          inputs={changeDynamic}
          onSubmit={handleFormSubmit}
          isEdit={isEdit}
          initialData={item}
          keyValue={keyValue}
          labelNames={labelNames}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddInputs;
