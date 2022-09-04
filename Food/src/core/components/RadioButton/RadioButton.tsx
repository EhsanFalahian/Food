import React, {FunctionComponent} from 'react';
import UnStyledButton from 'core/components/UnStyledButton';
import Container from 'core/components/Container';
import palette from 'core/styles/palette';

type Props = {
  id: number;
  select: number;
  onSelect: (id: number) => void;
};
const RadioButton: FunctionComponent<Props> = ({select, onSelect, id}) => {
  return (
    <UnStyledButton
      alignItems={'center'}
      justifyContent={'center'}
      width={25}
      height={25}
      borderRadius={25}
      borderWidth={2}
      onPress={() => onSelect(id)}
      borderColor={select === id ? palette.title : palette.textSecondary}>
      {select === id && (
        <Container
          width={'80%'}
          height={'80%'}
          borderRadius={50}
          borderWidth={1}
          backgroundColor={palette.border}
        />
      )}
    </UnStyledButton>
  );
};

export default RadioButton;
