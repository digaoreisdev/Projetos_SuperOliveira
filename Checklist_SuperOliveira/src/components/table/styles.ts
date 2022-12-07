import styled from "styled-components";

export const TableContainer = styled.main`
  width: 100%;
  max-width: 1600px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

interface StatusProps {
  variant: 'finished' | 'in_transit' | 'with_disagreements';
};

export const TransaciontsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.3rem;
  margin-top: -3rem;
  
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

const STATUS_COLOR = {
  finished: 'green-500',
  in_transit: 'yellow-100',
  with_disagreements: 'red-400',
} as const

interface StatusProps {
statusColor: keyof typeof STATUS_COLOR;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${props => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`;