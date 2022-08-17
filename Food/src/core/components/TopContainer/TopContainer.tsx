import React, {FunctionComponent} from 'react';
import Container from 'core/components/Container/Container';
import {useTheme} from 'styled-components';
import UnStyledButton from 'core/components/UnStyledButton/UnStyledButton';
import Icon from 'core/components/Icon/Icon';
import Text from 'core/components/Text';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  isGoBack?: boolean;
  background?: string;
  isLoading?: boolean;
  title?: string;
  children: React.ReactNode;
};
const TopContainer: FunctionComponent<Props> = ({
  isGoBack = false,
  background,
  children,
  isLoading = false,
  title,
}) => {
  const {palette} = useTheme();

  const {goBack} = useNavigation();

  return (
    <Container flex={1} backgroundColor={background ? background : 'white'}>
      <Container flexDirection={'row'} alignItems={'center'} px={3} py={3}>
        {isGoBack && (
          <UnStyledButton
            onPress={() => goBack()}
            borderRadius={5}
            p={2}
            borderWidth={2}
            borderColor={palette.textSecondary}
            alignItems={'center'}
            justifyContent={'center'}>
            <Icon name={'chevron-left'} color={palette.title} size={25} />
          </UnStyledButton>
        )}
        {title && (
          <Text
            color={palette.title}
            fontWeight={700}
            size={'l'}
            // textAlign={'center'}
            ml={isGoBack ? 6 : 5}
            t>
            {title}
          </Text>
        )}
      </Container>
      <Container flex={1} pt={10} px={16}>
        {children}
      </Container>
    </Container>
  );
};

export default TopContainer;
