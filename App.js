import { View} from 'react-native';
import Routers from './navigators/Routers';

export default function App() {
  return (
    <View className='flex flex-1'>
      <Routers/>
    </View>
  );
}
