import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
