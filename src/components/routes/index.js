import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import CalculatorOverview from '../views/calculator';

export  const Routes = (props)=>{
  return(
    <Switch>
      <Route exact path="/"  component={CalculatorOverview} />
    </Switch>
  )
}
