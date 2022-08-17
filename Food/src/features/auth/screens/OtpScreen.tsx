import React, {useState} from 'react';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import TopContainer from 'core/components/TopContainer/TopContainer';
import {useTheme} from 'styled-components';
import OtpInputs from 'react-native-otp-inputs';
import {style} from '@auth/screens/style';
import {CommonActions} from '@react-navigation/native';
import Button from 'core/components/Button';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {AuthNavigatorParams} from '@auth/navigator/AuthNavigator';
import {AuthRoutes} from '@auth/navigator/routes';
import {AppRoutes} from '../../../app/navigator/routes';

const OtpScreen = (): JSX.Element => {
  const {palette} = useTheme();

  const {dispatch} =
    useNavigation<NativeStackNavigationProp<AuthNavigatorParams>>();

  const [filled, setFilled] = useState<boolean>(false);
  return (
    <TopContainer isGoBack={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container px={1}>
          <Text size={'xxl'} fontWeight={'bold'} t>
            auth:phoneNumberVerif
          </Text>
          <Text color={palette.text} size={'xr'} pt={3} pb={2} t>
            auth:nowTakeCode
          </Text>
          <Container flexDirection={'row'} alignItems={'center'}>
            <Text color={palette.text} size={'xr'} pr={1} t>
              auth:weSentCodeOn
            </Text>
            <Text color={palette.title} fontWeight={'bold'}>
              +7 (987) 654-32-10
            </Text>
          </Container>
          <Container pt={6}>
            <OtpInputs
              autofillFromClipboard={false}
              style={{
                width: '100%',
                backgroundColor: '#ffff',
                flexDirection: 'row',
              }}
              inputContainerStyles={{
                ...style.inputContainerStyles,
                backgroundColor: palette.background,
              }}
              inputStyles={{
                ...style.TextStyle,
                color: palette.title,
              }}
              focusStyles={{
                backgroundColor: '#ffff',
                borderColor: palette.border,
                borderWidth: 2,
              }}
              handleChange={code => {
                code.length < 4 ? setFilled(false) : setFilled(true);
                console.log(code.length);
                console.log(filled);
              }}
              numberOfInputs={4}
            />
            <Text pt={3} pb={7} color={palette.text} textAlign={'center'} t>
              auth:reSendCode
            </Text>
          </Container>
          <Container position={'absolute'} right={3} bottom={0} width={'45%'}>
            <Button
              disabled={!filled}
              onPress={() =>
                dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: AppRoutes.HOWUSE}],
                  }),
                )
              }
              iconRight={'arrow-right'}
              title={'Next'}
              mt={10}
              type={filled ? 'title' : 'background'}
              color={filled ? palette.background : palette.text}
            />
          </Container>
        </Container>
      </ScrollView>
    </TopContainer>
  );
};

export default OtpScreen;
