import React from 'react';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import {useForm} from 'react-hook-form';
import ControlInput from 'core/components/Input/ControlInput';
import Button from 'core/components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigatorParams} from '@auth/navigator/AuthNavigator';
import {AuthRoutes} from '@auth/navigator/routes';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

type LoginValue = {
  name: string;
  phone: string;
};

const Login = (): JSX.Element => {
  const {palette} = useTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<AuthNavigatorParams>>();

  const {control, handleSubmit} = useForm<LoginValue>({
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onSubmit = (value: LoginValue) => {
    console.log(value);
    navigate(AuthRoutes.OTP_SCREEN);
  };
  return (
    <Container py={6} px={3}>
      <Text color={palette.title} size={'xxl'} fontWeight={'bold'} t>
        auth:firstSteps
      </Text>
      <Text color={palette.text} lineHeight={28} pt={3} size={'xr'} t>
        auth:nowWeNeed
      </Text>
      <Container pt={5}>
        <Text py={2} px={1} fontWeight={'bold'} size={'xr'} t>
          auth:enterName
        </Text>
        <ControlInput
          backgroundColor={palette.background}
          name={'name'}
          control={control}
          placeholder={'auth:orNickname'}
        />
      </Container>
      <Container pt={4}>
        <Text py={2} px={1} fontWeight={'bold'} size={'xr'} t>
          auth:phoneNumber
        </Text>
        <ControlInput
          backgroundColor={palette.background}
          name={'phone'}
          control={control}
          placeholder={'+7 (987) 654-32-10'}
        />
      </Container>
      <Container position={'absolute'} right={3} bottom={0} width={'45%'}>
        <Button
          title={'Next'}
          onPress={handleSubmit(onSubmit)}
          type={'title'}
          iconRight={'arrow-right'}
        />
      </Container>
    </Container>
  );
};

export default Login;
