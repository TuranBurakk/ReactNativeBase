import { View, Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-paper"


function StartScreen({navigation}){
    return(
        <View className='flex flex-1 bg-white dark:bg-slate-300 justify-center'>
            <View className='mr-10 ml-10'>

            <Button className='border rounded-md bg-red-300'
            onPress={() => navigation.navigate('second')}
            >
                <Text className='font-bold text-white'>
                    Go Second Screen
                </Text>
            </Button>
                </View>
        </View>
    )
}

export default StartScreen