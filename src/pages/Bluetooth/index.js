import React, { useState } from "react";
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
import style from "./style.css";
import { BsSearch } from "react-icons/bs";

function Bluetooth() {
  const [devicesList, setDeviceList] = useState([]);
  const [load, setLoad] = useState(false);

  async function searchDevices() {
    setLoad(true);
    try {
      const list = await BluetoothSerial.discoverUnpaired();
      setDeviceList(list);
    } catch (error) {
      console.log("error");
    }
    setLoad(false);
    console.log(devicesList);
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
  };

  const btDisconnected = <DevicesContainer></DevicesContainer>;

  const searchBt = (
    <DevicesContainer>
      <SearchButton type="button" onClick={() => searchDevices()}>
        <BsSearch />
        <h3>Procurar Dispositivos</h3>
      </SearchButton>
    </DevicesContainer>
  );

  const searchingBt = (
    <DevicesContainer>
      <h1>CARREGANDO...</h1>
    </DevicesContainer>
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

        {devicesList.length > 0 ? (
          devicesList.map((d) => (
            <DevicesContainer key = {d.name}>
              <h1>{d.name}</h1>
            </DevicesContainer>
          ))
        ) : null}
        {!load ? searchBt : searchingBt}
      </Slider>
    </Container>
  );
}

export default Bluetooth;
