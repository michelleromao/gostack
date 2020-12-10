import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Bar = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #a8a8b3;
    text-decoration: none;
    transition: color 0.3s;
  }
  a:hover {
    color: ${shade(0.2, '#a8a8b3')};
  }
`;
