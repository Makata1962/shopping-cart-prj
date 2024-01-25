import styled, { keyframes } from "styled-components";
import { Spin } from 'antd';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(Spin)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
