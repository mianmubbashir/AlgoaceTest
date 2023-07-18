import {Provider} from 'react-redux';
import AppNavigator from './src/screens/Navigation';
import store from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
