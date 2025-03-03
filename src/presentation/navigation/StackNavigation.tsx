import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';


export type RootStackParams =  {
  Home: undefined;
  Deatils:{movieId:number};
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {


// render
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deatils" component={DetailsScreen} />
    </Stack.Navigator>
  )
}
