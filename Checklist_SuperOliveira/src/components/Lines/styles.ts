import styled from "styled-components";

export const LineBlue = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme["blue-700"]};
`;

export const LineRed = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme["red-100"]};
`;