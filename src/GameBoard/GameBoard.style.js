import styled from "styled-components";

export const Board = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 320px;
  height: auto;
  margin-top: 30px;
`;

export const Cell = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: solid;
  background: #027cc2;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
`;
export const Info = styled.div`
  text-align: center;
  margin-top: 100px;
  font-weight: 600;
  font-size: 24px;
`;

export const RestarttButton = styled.button`
  margin-top: 30px;
`;
