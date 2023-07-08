import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationString from "./navigationString"
import HTMLMakerApp from "../component/ui";



const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationString.DASHBOARD}>
        <Stack.Screen name={navigationString.DASHBOARD} component={HTMLMakerApp} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default Routes;