import styled from "styled-components";

export const Container = styled.div`
  background-color: #30444e;
  display: flex;
  flex-direction: column;
  flex: 1;

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

export const DevicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 1;
  border-style: solid;
  border-color: #ccc1;
  padding-bottom: 30px; 
  width: 60vw;
  height: 60vh;
  margin-top: 50px;
  background: #dfe2e4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SearchButton = styled.button`
  color: #000;
  background: transparent;
  border: 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 180%;
  opacity: 40%;
  h3 {
    margin-top: 10px;
    font-family: Muli;
    font-size: 50%;
  }
`;

export const FingerButton = styled.button`
  border-radius: 30px;
  border: 1;
  border-style: solid;
  border-color: #438fd1;
  padding: 0 15px;
  height: 35px;
  width: 135px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #438fd1;
`;
