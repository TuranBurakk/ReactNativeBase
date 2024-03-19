import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SecondScreen, StartScreen } from '../screens';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator()

export default function Routers() {
    
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ?
                    (<>
                        <Stack.Screen name='start' component={StartScreen} />
                        <Stack.Screen name='second' component={SecondScreen} />
                    </>) :
                    (<Stack.Screen name='login' component={LoginScreen} />)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
