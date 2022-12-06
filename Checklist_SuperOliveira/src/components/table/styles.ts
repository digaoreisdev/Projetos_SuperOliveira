import styled from "styled-components";

export const TableContainer = styled.main`
  width: 100%;
  max-width: 1600px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransaciontsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.1rem;
  /* margin-top: 1.5rem; */
  
  th {
    background: ${props => props.theme["gray-800"]};
  }
  
  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;