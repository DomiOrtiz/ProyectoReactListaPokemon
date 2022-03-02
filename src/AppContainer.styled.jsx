import React from "react";
import styled from "styled-components";

export const AppContainer = styled.table`
  caption-side: top;
  border: none;
  font-size: 20px;
  width: 50%;
  
  border-collapse: collapse;
  caption-side: bottom;
  
  td,
  th {
    border: none;
    font-family: 'Rock Salt', cursive;
    padding: 10px;
    font-style: italic;
    caption-side: bottom;
    text-align: center;
  }
   td {
    font-family: 'helvetica neue', helvetica, arial, sans-serif;
    letter-spacing: 2px;
    padding: 10px 30px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #76b5c5;
    }
  }
  thead > tr {
    background-color: teal;
    color: white;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export const AppDetail = styled.table`
  caption-side: top;
  border: 1px;
  font-size: 20px;
  width: 50%;
  
  border-collapse: collapse;
  caption-side: bottom;
  
  td,
  th {
    border-style: dashed solid;
    font-family: 'Rock Salt', cursive;
    padding: 10px;
    font-style: italic;
    caption-side: bottom;
    text-align: left;
     }
   td {
    font-family: 'helvetica neue', helvetica, arial, sans-serif;
    letter-spacing: 2px;
    padding: 10px 30px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #76b5c5;
    }
  }
  thead > tr {
    background-color: teal;
    color: white;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;


//export default {AppContainer, AppDetail};
