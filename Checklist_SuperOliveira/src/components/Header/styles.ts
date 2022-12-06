import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["white-100"]};
  padding: 2.5rem 0 5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewChecklistButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme["blue-600"]};
  color: ${props => props.theme["white-100"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["blue-700"]};
    transition: background-color 0.5s;
  }
`;