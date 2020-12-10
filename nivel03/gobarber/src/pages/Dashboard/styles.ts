import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 144px;
  background: #28262e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    img {
      width: 140px;
    }
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 100px;

      img {
        width: 56px;
        height: 56px;
        border-radius: 100%;
      }
      div {
        margin-left: 16px;
        display: flex;
        flex-flow: column;
        align-items: start;
        span {
          color: #f4ede8;
        }
        p {
          font-weight: bolder;
          color: #ff9000;
        }
      }
    }
    button {
      background-color: transparent;
      border: 0;
      height: 20px;
      svg {
        color: #999591;
      }
    }
  }
`;

export const ContentHeader = styled.div``;
