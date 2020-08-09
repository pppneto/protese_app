import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './pages/Main'
import Bluetooth from './pages/Bluetooth'
import Chart from './pages/Chart'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/chart" exact component={Chart}/>
        <Route path="/bluetooth" exact component={Bluetooth}/>
      </Switch>
    </BrowserRouter>
  )
}