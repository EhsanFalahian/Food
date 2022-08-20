import 'react-native-gesture-handler';
import * as React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from '../core/config/i18n';
import {ThemeProvider} from 'styled-components';
import defaultTheme from '../core/styles/theme/defaultTheme';
import Profile from '../features/profile/Profile';
import Login from '@auth/screens/Login';
import OtpScreen from '@auth/screens/OtpScreen';
import Onboarding from '../features/auth/screens/onboarding/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '@auth/navigator';
import {SafeAreaView} from 'react-native';
import UseOne from '../features/guid/component/useOne/UseOne';
import UseTwo from '../features/guid/component/useTwo/UseTwo';
import UseThree from '../features/guid/component/useThree/UseThree';
import HowUseApp from '../features/guid/screen/HowUseApp';
import AddFriend from '../features/addFriend/screen/AddFriend';
import AppNavigator from './navigator';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <AppNavigator />
            {/*<AuthNavigator />*/}
            {/*<AddFriend />*/}
            {/*<HowUseApp />*/}
          </SafeAreaView>
        </NavigationContainer>
        {/*/!*<Onboarding />*!/\*/}
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
