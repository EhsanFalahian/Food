import {UseControllerProps, Controller} from 'react-hook-form';
import Input, {InputProps} from './Input';

export type ControlInputProps<T> = Omit<
  InputProps,
  'onBlur' | 'onChangeText' | 'value'
> &
  UseControllerProps<T>;

const ControlInput = <T,>(props: ControlInputProps<T>): JSX.Element => {
  const {name, control, ...rest} = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value as string | undefined}
          {...rest}
        />
      )}
    />
  );
};
export default ControlInput;
