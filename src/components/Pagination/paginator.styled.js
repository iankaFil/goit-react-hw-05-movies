import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
  font-size: 18px;
  .selected {
    color: white;
    background-color: orange;
    /* border: 1px solid orange; */
    &:hover{
      background-color: orangered;
    }
  }
  li {
    list-style-type: none;
    /* border: 1px solid #7400bc; */
    border-radius: 7px;
    color:#fff;
    background-color:#b641ff ;
    &:hover {
      background-color: #7400bc;
      color: #fff;
    }
  }
  a {
    display: block;
    padding: 5px 10px;
    cursor: pointer;
  }
`;