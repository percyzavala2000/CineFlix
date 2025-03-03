
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigation } from './presentation/navigation/StackNavigation';

const App = () => {
// render
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    
  )
}

export default App


