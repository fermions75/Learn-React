import { useState } from 'react'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

function Cards(props) {

    return (
  
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>
            {props.cardDesc}
          </Card.Text>
          <Button variant="primary">Complete the task</Button>
        </Card.Body>
      </Card>
  
    )
  }




Cards.propTypes = {
    cardTitle : PropTypes.string.isRequired,
    cardDesc : PropTypes.string.isRequired
}


export default Cards