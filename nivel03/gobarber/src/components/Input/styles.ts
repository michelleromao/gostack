import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #232029;
  color: #666360;
  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


  svg {
    margin-right: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  button {
    background: transparent;
    color: #666360;
    height: 20px;
    width: 20px;
    border: 0;
  }
  input {
    flex: 1;
    color: #f4ede8;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
