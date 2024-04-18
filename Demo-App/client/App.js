import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./components/ListCard/ListCard";
import AddInputs from "./components/addinputs/addinput";
import Table from "./components/Table/table";


const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"List"}
      >
     
        <Stack.Screen
          name="List"
          component={List}
          options={{ title: "List" }}
        />
        <Stack.Screen
          name="addinputs"
          component={AddInputs}
          options={{ title: "addinputs" }}
        />
    
        <Stack.Screen
          name="Table"
          component={Table}
          options={{ title: "Table" }}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
