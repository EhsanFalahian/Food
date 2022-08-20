import React, {useCallback, useState} from 'react';
import {Contact} from 'features/addFriend/type';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import UnStyledButton from 'core/components/UnStyledButton';

type Props = Contact & {
  onIsChecked: (id: number) => void;
};
const ContactItem: React.FC<Props> = ({
  id,
  isFriend,
  phone,
  name,
  onIsChecked,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleSetCheck = useCallback(() => {
    onIsChecked(id);
    setChecked(prev => {
      return !prev;
    });
  }, [checked, setChecked]);
  const {palette} = useTheme();
  return (
    <Container
      px={3}
      py={2}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <Container>
        <Text size={'xr'}>{name}</Text>
        <Text color={palette.text}>{phone}</Text>
      </Container>
      <Container>
        {isFriend ? (
          <Text color={palette.select} fontWeight={'bold'} t>
            friend:yourFriend
          </Text>
        ) : (
          <UnStyledButton width={30} height={30} onPress={handleSetCheck}>
            <AnimatedCheckbox
              checked={checked}
              highlightColor={palette.border}
              checkmarkColor={palette.white}
              boxOutlineColor={palette.title}
            />
          </UnStyledButton>
        )}
      </Container>
    </Container>
  );
};

export default ContactItem;
