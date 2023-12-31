import styled from 'styled-components';

import { themes } from 'styles/variables/themes';

export const FlagBtn = styled.button`
  margin-top: 2px;
  border-radius: 8px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${themes.animations.duration};
  transition-timing-function: ${themes.animations.cubicBezier};
  height: 28px;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const Label = styled.p`
  position: absolute;
  top: -5px;
  right: -3px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6.5px;

  width: 12px;
  height: 12px;

  font-size: 8px;
  font-weight: 700;

  background-color: ${themes.colors.ligthBlue};
  border-radius: 50%;
`;
