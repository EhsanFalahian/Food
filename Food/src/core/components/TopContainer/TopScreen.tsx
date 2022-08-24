import React, {FunctionComponent} from 'react';
import Container from 'core/components/Container';
import palette from 'core/styles/palette';
import UnStyledButton from 'core/components/UnStyledButton';
import Icon from 'core/components/Icon';
import Text from 'core/components/Text';

type TopScreenProps = {
  title: string;
  iconLeft: string;
  isIconLeft?: boolean;
  background?: string;
  children: React.ReactNode;
};

const TopScreen: FunctionComponent<TopScreenProps> = ({
  iconLeft,
  isIconLeft,
  children,
  background,
  title,
}) => {
  return (
    <Container
      flex={1}
      backgroundColor={background ? background : palette.background}>
      <Container
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={3}
        py={3}>
        <UnStyledButton
          borderRadius={5}
          p={2}
          borderWidth={2}
          borderColor={palette.textSecondary}
          alignItems={'center'}
          justifyContent={'center'}>
          <Icon name={'sort-variant'} size={25} color={palette.title} />
        </UnStyledButton>
        <Text color={palette.title} fontWeight={700} size={'l'} ml={2} t>
          {title}
        </Text>
        {isIconLeft && (
          <UnStyledButton
            borderRadius={5}
            p={2}
            borderWidth={2}
            borderColor={palette.textSecondary}
            alignItems={'center'}
            justifyContent={'center'}>
            <Icon name={iconLeft} size={25} color={palette.title} />
          </UnStyledButton>
        )}
      </Container>
      <Container flex={1} pt={10} px={16}>
        {children}
      </Container>
    </Container>
  );
};

export default TopScreen;
