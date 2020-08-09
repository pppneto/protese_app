import React,{useState,useEffect} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, PolarGrid} from 'recharts'
import style from './style.css'
import { Container,TitleText, DataText, ChartContainer, TitleContainer, Header, ArrowButton } from './styles';
import { IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



function Chart() {
  const data = [{name:'Page A', uv: 300, pv: 2400, amt:2400},
  {name:'Page B', uv: 200, pv: 2400, amt:2400},
  {name:'Page C', uv: 400, pv: 2400, amt:2400},
  {name:'Page D', uv: 500, pv: 2400, amt:2400},
  {name:'Page E', uv: 550, pv: 2400, amt:2400},
  {name:'Page F', uv: 450, pv: 2400, amt:2400},
  {name:'Page G', uv: 426, pv: 2400, amt:2400},]

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
   }, []);
  
  
  console.log(windowDimensions);
  return (
    <Container>
      <Header>
        <Link to="/">
          <ArrowButton type = "button">
              <IoIosArrowBack/>
          </ArrowButton>
        </Link>
      </Header>
      <TitleContainer>
        <TitleText>Tensão</TitleText>
        <DataText>{data[6].uv+"V"}</DataText>
      </TitleContainer>
      <ChartContainer>
        <LineChart width={windowDimensions.width - 50} height= {windowDimensions.height-230} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#438fd1" />
          <CartesianGrid stroke = "#ccc3" horizontal = {false}/>
        </LineChart>
      </ChartContainer>
    
    </Container>
  )
}

export default Chart;