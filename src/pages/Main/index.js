import React from 'react';
import Logo from '../../images/Logo.png'
import { ButtonGrafico, ButtonBluetooth, Bola3, Bola4, Bola, Bola2, DivBody, FingerButton, Header, Log, Separator, Info, ButtonContainer } from './styles'
import { FaBluetoothB } from 'react-icons/fa'
import { AiOutlineAreaChart } from 'react-icons/ai'
import style from './style.css'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
      <DivBody>
        <Bola />
        <Bola2 />
        <Bola3 />
        <Bola4 />
        <Header>

          <Link to="/bluetooth">
            <ButtonBluetooth type = "button" onClick = {() => console.log('teste')}>
              <FaBluetoothB />
              <h1>Conectar-se</h1>
            </ButtonBluetooth>
          </Link>

          <Link to="/chart">
            <ButtonGrafico>
              <AiOutlineAreaChart />
              <h1>Gráfico</h1>
            </ButtonGrafico>
          </Link>

        </Header>

        <Log>
          <img src={Logo} style={{width: "70%"}}></img>
        </Log>

        <Info>Selecione os dedos para ativá-los</Info>

        <ButtonContainer>
          <FingerButton>Polegar</FingerButton>
          <FingerButton>Indicador</FingerButton>
        </ButtonContainer>
        <ButtonContainer>
          <FingerButton>Médio</FingerButton>
          <FingerButton>Anelar</FingerButton>
        </ButtonContainer>  
        <ButtonContainer> 
          <FingerButton>Mínimo</FingerButton>
          <FingerButton>Todos</FingerButton>
        </ButtonContainer>
        
      </DivBody>
    </>
  )
}

export default Main;