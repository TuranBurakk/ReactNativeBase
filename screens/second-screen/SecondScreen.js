import { View, Text, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { Button } from "react-native-paper";


function SecondScreen(){

    const dispatch = useDispatch();

    const handleLogout = () => {
        
        
            dispatch(setUser(false));
        
    };



    return(
        <View className='flex-1 bg-white dark:bg-slate-300 justify-center items-center'>
            <View className='w-full'>
            <Button
                    className='border rounded-md bg-red-300 mt-5 mr-10 ml-10 '
                    onPress={handleLogout} 
                >
                    <Text className='font-bold text-white'>
                        Çıkış Yap
                    </Text>
                </Button>
            </View>
        </View>
    )
}

export default SecondScreen