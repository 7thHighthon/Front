import styled from "styled-components";

export const AdminBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 0px 140px;
  padding-top: 128px;
  padding-bottom: 106px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const AdminTitle = styled.h1`
  color: black;
  font-size: 100px;
  text-align: start;
  font-weight: bold;
`;

export const AdminSubTitle = styled.h2`
  color: #227cff;
  font-size: 40px;
  text-align: start;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const AdminFormLine = styled.hr`
  width: 100%;
  margin: 36px 0px;
`;

export const AdminFormItemWrap = styled.div`
  width: 1640px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 42px;
  margin: 0px auto;
`;
