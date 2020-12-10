import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle, FiEyeOff, FiEye } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container, InputContainer, Error } from './styles';

import Tooltip from '../Tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPwd?: boolean;
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ isPwd, name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocued] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocued(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocued(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleVisibility = useCallback(() => {
    setVisibility(!visibility);
    if (inputRef.current?.type === 'password') {
      inputRef.current.type = 'text';
    } else if (inputRef.current?.type === 'text') {
      inputRef.current.type = 'password';
    }
  }, [visibility]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <InputContainer>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          {...rest}
          ref={inputRef}
        />
        {isPwd &&
          (visibility ? (
            <button type="button" onClick={handleVisibility}>
              <FiEyeOff size={20} />
            </button>
          ) : (
            <button type="button" onClick={handleVisibility}>
              <FiEye size={20} />
            </button>
          ))}
      </InputContainer>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
