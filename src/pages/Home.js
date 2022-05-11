import React from 'react'
import { ExampleContext } from '../context/context';
import styled from 'styled-components';
import { Button, Row, Col } from 'react-bootstrap';

const Home = (() => {
  const { example, setExample } = React.useContext(ExampleContext);
  return (
    <div>
      <h1>home</h1>
      <h2>{example}</h2>
      <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row>
    </div>

  )
})

export default Home
