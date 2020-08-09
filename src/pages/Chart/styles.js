import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  background-color: #30444e;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  position: relative;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const ArrowButton = styled.button`
  color: #fff;
  background: transparent;
  border: 0;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 180%;
`;

export const DataText = styled.h1`
  font-family: Muli;
  font-size: 1000%;
  color: #ffffff;
  display: flex;
  margin: -20px 10px 0px 10px;
  padding: 0px 0px;
  text-align: center;
  opacity: 47%;
`;

export const TitleText = styled.h2`
  font-family: Muli;
  font-size: 100%;
  color: #ffffff;
  display: flex;
  margin: 10px 0px 0px 0px;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
