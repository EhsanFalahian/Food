import 'react-native-gesture-handler';
import * as React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from '../core/config/i18n';
import {ThemeProvider} from 'styled-components';
import defaultTheme from '../core/styles/theme/defaultTheme';

import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native';

import AppNavigator from './navigator';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <AppNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
