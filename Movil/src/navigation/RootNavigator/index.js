import { createStackNavigator } from 'react-navigation-stack';

import { Example } from '../../containers';
import { EXAMPLE_SCREEN } from '../screens';

const RootNavigator = createStackNavigator(
  {
    Example
  },
  {
    initialRouteName: EXAMPLE_SCREEN,
    headerMode: 'none'
  }
);

export default RootNavigator;
