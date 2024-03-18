import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SecondScreen, StartScreen } from '../screens';


const Stack = createStackNavigator()

export default function Routers() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='start' component={StartScreen}/>
                <Stack.Screen name='second' component={SecondScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}