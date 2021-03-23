import styled from "styled-components";

export const Out = styled.span`
  font-weight: 700;
  color: green;
`;

export const Delete = styled.a`
  display: flex;
  justify-content: center;
  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: #2ecc71;
  color: #ffffff;
  font-weight: 700;

  transition: background-color 0.3s;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #27ae60;
  }
`;

export const ButtonName = styled.span`
  display: block;
  padding: 12px 24px;
`;
