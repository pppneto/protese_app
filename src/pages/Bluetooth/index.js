import React, { useState, useEffect } from "react";
import {
  Container,
  FingerButton,
  DevicesContainer,
  Header,
  ArrowButton,
  SearchButton,
} from "./styles";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { FaBluetooth } from "react-icons/fa";
import style from "./style.css";


function Bluetooth() {
  const [devicesList, setDeviceList] = useState([]);
  const [load, setLoad] = useState(false);
  const [stateBt, setStateBt] = useState();
  const [connectedTo, setConnectedTo] = useState("");

  useEffect(() => {
    
    //Verifica se o bluetooth esta ligado e seta seu estado
    BluetoothSerial.isEnabled(
      function () {
        setStateBt(true);
        carregaDevice();
      },
      function () {
        setStateBt(false);
      }
    );
    
    //Listener: Para cada dispositivo novo encontrado adiciona a lista de dispositivos em exibição
    BluetoothSerial.setDeviceDiscoveredListener().subscribe((device) => {
      console.log(device);
      const contem = devicesList.find(d => d.id === device.id)
      if(!contem){
        setDeviceList([...devicesList,device])
      }
    });
    
  }, []);
  
  //Carrega os dispositivos já pareados na tela
  async function carregaDevice() {
    const list = await BluetoothSerial.list();
    setDeviceList(list);
  }

  //Busca os dispositovs não pareados
  async function searchDevices() {
    setLoad(true);
    try {
      await BluetoothSerial.discoverUnpaired();
    } catch (error) {
      console.log("error");
    }
    setLoad(false);
  }

  //Liga o Bluetooth
  async function enableBt() {
    try {
      await BluetoothSerial.enable();
    } catch (error) {
      console.log("Não foi possível ligar o bluetooth");
    }

    BluetoothSerial.isEnabled(
      function () {
        setStateBt(true);
        carregaDevice();
      },
      function () {
        setStateBt(false);
      }
    );
  }

  //Conecta ao dispositivo selecionado
  function connectDevice(device) {
    BluetoothSerial.connect(device.address).subscribe(
      (success) => {
        console.log("Conectado com sucesso");
        setConnectedTo(device.address)
      },
      (error) => {
        console.log("Não foi possível conectar");
        setConnectedTo("")
      }
    );
  }

  //Define as configurações do Slider
  const settings = {
    centerMode: true,
    infinite: false,
    variableWidth: true,
    slidesToShow: 1,
    speed: 50,
    
  };

  //Div do Slider quando o bluetooth esta desligado
  const btDisable = (
    <div>
      <DevicesContainer>
      <button type="button" onClick={() => enableBt()}>
        <AiOutlineWarning />
        <h1>Bluetooth está desligado</h1>
        <h3>Clique para ligalo</h3>
      </button>
    </DevicesContainer>
    </div>
    
  );
  
  //Div do Slider para pesquisar dispositvos
  const searchBt = (
    <div>
      <DevicesContainer>
      <SearchButton type="button" onClick={() => searchDevices()}>
        <BsSearch />
        <h3>Procurar Dispositivos</h3>
      </SearchButton>
    </DevicesContainer>
    </div>
    
  );
  
  //Div do Slider quando o bluetooth esta procurando dispositvos
  const searchingBt = (
    <div>
      <DevicesContainer>
      <h1>CARREGANDO...</h1>
    </DevicesContainer>
    </div>
    
  );

  return (
    <Container>
      <Header>
        <Link to="/">
          <ArrowButton>
            <IoIosArrowBack />
          </ArrowButton>
        </Link>
      </Header>
      <Slider {...settings}>
        {devicesList.length > 0
          ? devicesList.map((d) => (
            <div>
              <DevicesContainer key={d.id}>
                <FaBluetooth />
                <h1>{d.name}</h1>
                <button type="button" onClick={() => connectDevice(d)}>
                  Conectar-se
                </button>
              </DevicesContainer>
              </div>
            ))
          : null}
        {stateBt ? (!load ? searchBt : searchingBt) : btDisable}
      </Slider>
    </Container>
  );
}

export default Bluetooth;
