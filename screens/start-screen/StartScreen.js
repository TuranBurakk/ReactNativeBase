import { View, Text, TouchableOpacity } from "react-native"


function StartScreen({navigation}){
    return(
        <View className='flex flex-1 bg-white justify-center'>
            <View className='mr-10 ml-10'>

            <Text>
                StartScreen
            </Text>
            <TouchableOpacity className='border rounded-md bg-red-300'
            onPress={() => navigation.navigate('second')}
            >
                <Text>
                    Go Second Screen
                </Text>
            </TouchableOpacity>
                </View>
        </View>
    )
}

export default StartScreen