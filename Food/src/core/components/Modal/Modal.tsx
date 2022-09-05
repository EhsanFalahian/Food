import React, {FunctionComponent, SetStateAction} from 'react';
import {Modal as ModalComponent, ModalProps} from 'react-native';
import UnStyledButton from 'core/components/UnStyledButton';
import palette from 'core/styles/palette';
import {convertHexToRGBA} from 'core/styles/color';
import Container from 'core/components/Container';
import Icon from 'core/components/Icon';
import Text from 'core/components/Text';

type Props = ModalProps & {
  title?: string;
  onClose?: React.Dispatch<SetStateAction<boolean>>;
};

const Modal: FunctionComponent<Props> = ({
  visible,
  children,
  onClose,
  title,
  ...res
}) => {
  return (
    <ModalComponent
      visible={visible}
      animated={true}
      animationType={'fade'}
      transparent={true}
      {...res}>
      <UnStyledButton
        // onPress={() => onClose?.(!visible)}
        flex={1}
        justifyContent={'center'}
        backgroundColor={convertHexToRGBA(palette.text, 20)}>
        <Container
          backgroundColor={palette.white}
          mx={20}
          overflow={'hidden'}
          borderRadius={24}
          py={4}
          alignItems={'center'}>
          <Container
            backgroundColor={convertHexToRGBA(palette.text, 5)}
            borderRadius={24}
            py={4}
            px={6}
            alignItems={'center'}>
            <Icon name={'check-bold'} size={60} color={palette.title} />
          </Container>
          <Container>
            <Text fontWeight={'bold'} size={'l'} py={3} t>
              {title}
            </Text>
          </Container>
          <Container px={5} alignItems={'center'}>
            {children}
          </Container>
        </Container>
      </UnStyledButton>
    </ModalComponent>
  );
};

export default Modal;
