import styled from 'styled-components'

export const DivBody = styled.body`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px; 
  position: relative;
  box-sizing: border-box;
  display: flex ; 
  flex-direction: column;
  flex:1;
`

export const Bola = styled.div`
  background-color:#438fd1;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  position: absolute;
  bottom: -90px;
  left: -50px;
  z-index: -1;
`
export const Bola2 = styled.div`
  background-color:#438fd1;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  position: absolute;
  bottom: -130px;
  left: 80px;
  z-index: -1;
`

export const Bola3 = styled.div`
  background-color:#438fd1;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  position: absolute;
  top: -90px;
  right: -50px;
  z-index: -1;
`

export const Bola4 = styled.div`
  background-color:#438fd1;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  position: absolute;
  top: -140px;
  right: 80px;
  z-index: -1;
`
export const Header = styled.div`
  padding: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  justify-content:space-between;
 
`

export const ButtonBluetooth = styled.button`
    border: 0;
    flex: 1;
    background-color: transparent;
    margin: 10px 10px;
    h1{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 90%;
      color: #438fd1;
      display: flex;
      flex-direction:column;
      align-items:center;
    }
    svg{
        font-size: 190%;
        color: #438fd1;
      }
`
export const ButtonGrafico= styled.button`
    border: 0;
    margin: 10px 10px;
    background: transparent;
    flex:1;
    h1{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 90%;
      color: #FFF;
      display: flex;
      flex-direction:column;
      align-items:center;
    }
    svg{
        color: #FFF;
        font-size: 190%;
    }
`
export const Log = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content:center;
  margin: 0;
`

export const Info = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #438fd1;
  display: flex ;
  
  align-items: center;
  justify-content: center;
  margin: 15px;
  border-top: 1px solid #CCC;
  padding-top: 15px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content:space-evenly;
  
 
`
export const FingerButton = styled.button`
  border-radius:30px;
  border: 1;
  border-style: solid;
  border-color: #438fd1;
  padding: 0 15px;
  height: 35px;
  width: 135px;
  margin: 10px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #438fd1;
`