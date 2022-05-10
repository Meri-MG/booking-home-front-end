import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  background-color: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: ${({ big }) => (big ? '1rem 2.5rem' : '0.9rem 1.5rem')};})};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '1.2rem' : '0.9rem')};

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Button;
