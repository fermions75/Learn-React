import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from './Components/Cards';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Mohema',
  lastName: 'Mahjabin'
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
};


function Apps(props) {

  return (
    <>

    <Cards/>
    
    </>

  )
}

export default Apps
