import { View} from 'react-native';
import Routers from './navigators/Routers';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <View className='flex flex-1'>
      <Routers/>
    </View>
    </Provider>
  );
}
