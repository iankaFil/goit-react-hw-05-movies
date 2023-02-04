import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
  font-size: 18px;
  list-style: none;
  .selected {
    color: red;
  }
  a {
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`;
