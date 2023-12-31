import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themes } from 'styles/variables/themes';

export const RouteLink = styled(Link)`
  text-decoration: underline;
  color: ${themes.colors.accent};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
  }
`;
