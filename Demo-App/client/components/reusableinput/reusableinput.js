import { useEffect, useState } from "react";
import styles from "./reusableinput.style";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


const ReusableInput = ({
  title,
  inputs,
  onSubmit,
  isEdit,
  initialData,
  keyValue,
  labelNames,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [EmailError, setEmailError] = useState("");
  const [MobileNumberError, setMobileNumberError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit && initialData) {
      const initialDataArray = Object.keys(initialData).map((key) => ({
        name: key,
        value: initialData[key],
      }));
      setInputValues(
        Object.fromEntries(
          initialDataArray.map(({ name, value }) => [name, value])
        )
      );
    }
  }, [isEdit]);

  const validationEmail = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const checkValidation = (name, text) => {
    if (name === "email") {
      const validCheck = validationEmail(text);
      if (text.trim() === "") {
        setEmailError("");
      } else {
        setEmailError(validCheck ? "" : " Please enter a valid email address.");
      }
    } else if (name === "mobileNumber") {
      const phonePattern = /^[789][0-9]{9}$/;
      if (text.trim() === "" || phonePattern.test(text)) {
        setMobileNumberError("");
      } else {
        setMobileNumberError(" Please enter a valid MobileNumber.");
      }
    }
  };

  const handleInputChange = (name, text) => {
    setInputValues((prevValues) => {
      if (Array.isArray(prevValues[name])) {
        const newArray = [...prevValues[name]];
        newArray[0] = text;
        return { ...prevValues, [name]: newArray };
      } else {
        return { ...prevValues, [name]: text };
      }
    });

    checkValidation(name, text);

    // setInputValues((prevValues) => ({ ...prevValues, [name]: text }));
  };

  const handlePress = () => {

    let allField;
    switch (keyValue) {
      case "addAgent":
        allField = [
          "address",
          "companyName",
          "email",
          "mobileNumber",
          "username",
        ];
        break;
      case "addCustomer":
        allField = ["customerName", "address", "email", "mobileNumber"];
        break;
      case "addProduct":
        allField = ["productName", "category"];
        break;
      case "addGroup":
        allField = ["groupName"];
        break;

      default:
        break;
    }

    const allFieldsFilled = allField.every((field) => inputValues[field]);
    if (allFieldsFilled) {
      onSubmit(inputValues);

      setInputValues({});
      setEmailError("");
      setMobileNumberError("");
      setIsLoading(false);
    } else {
      setMobileNumberError("Please enter a valid MobileNumber.");
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View>
          {inputs.map((input, index) =>
            input.type === "dropdown" ? (
              <View
                key={input.name}
                style={{ borderRadius: 10, overflow: "hidden", gap: 10 }}
              >
                <Text style={styles.label}>{labelNames[index]}</Text>
                {/* <Picker
                  key={input.name}
                  style={styles.input}
                  placeholder={input.placeholder}
                  selectedValue={inputValues[input.name] || ""}
                  onValueChange={(itemValue) =>
                    handleInputChange(input.name, itemValue)
                  }
                >
                  {input.options.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                  ))}
                </Picker> */}
              </View>
            ) : (
              <View key={input.name} style={{ gap: 10 }}>
                <View>
                  <Text style={styles.label}>{labelNames[index]}</Text>
                </View>
                <View>
                  <TextInput
                    key={input.name}
                    style={[
                      styles.input,
                      {
                        borderBottomColor:
                          (input.name === "email" && EmailError) ||
                          (input.name === "mobileNumber" && MobileNumberError)
                            ? "red"
                            : "#fff",
                        borderBottomWidth:
                          (input.name === "email" && EmailError) ||
                          (input.name === "mobileNumber" && MobileNumberError)
                            ? 2
                            : 0,
                      },
                    ]}
                    value={inputValues[input.name] || ""}
                    onChangeText={(text) => handleInputChange(input.name, text)}
                    // placeholder={input.placeholder}
                  />
                  {(input.name === "email" ||
                    (input.name === "mobileNumber" && EmailError) ||
                    MobileNumberError) && (
                    <Text style={{ color: "red" }}>
                      {input.name === "email" && EmailError}
                      {input.name === "mobileNumber" && MobileNumberError}
                    </Text>
                  )}
                </View>
              </View>
            )
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          {isLoading && <ActivityIndicator />}
          <Text style={styles.buttonText}>{isEdit ? "Save" : title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReusableInput;
