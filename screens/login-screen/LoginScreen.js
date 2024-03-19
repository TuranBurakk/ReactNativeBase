import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setUser } from '../../redux/userSlice'; // setUser action'ını ekledik

function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const { email, password, } = useSelector(state => state.user);

    const handleLogin = () => {
        
        if(email && password ){
            dispatch(setUser(true));
        }
    };

    return (
        <View className='flex-1 bg-white dark:bg-slate-300 justify-center items-center'>
            <View className='w-full'>

                <TextInput
                    className='mr-10 ml-10 rounded-md bg-slate-200 '
                    placeholder="Email"
                    onChangeText={(text) => dispatch(setEmail(text))}
                />
                <TextInput
                    className='mr-10 ml-10 mt-5 rounded-md bg-slate-200 '
                    placeholder="password"
                    secureTextEntry
                    onChangeText={(text) => dispatch(setPassword(text))}
                />

                <Button
                    className='border rounded-md bg-red-300 mt-5 mr-10 ml-10 '
                    onPress={handleLogin} 
                >
                    <Text className='font-bold text-white'>
                        Giriş Yap
                    </Text>
                </Button>

            </View>
        </View>
    );
}

export default LoginScreen;
