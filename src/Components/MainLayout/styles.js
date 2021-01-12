import styled from 'styled-components';

import { Menu, ExpandMore } from '../../Styles/Icons';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const MenuIcon = styled(Menu)`
  position: fixed;
  top: 0;
  left: 0;
  height: 1.6rem;
  margin-top: 10px;
  margin-left: 10px;
  color: var(--secondary);
`;
export const ChevronDown = styled(ExpandMore)`
  position: fixed;
  bottom: 0;
  left: 50%;
  height: 2rem;
  margin-left: -1rem;
  margin-bottom: 15px;
  color: var(--secondary);
`;
