import React from 'react'
import { ExampleContext } from '../context/context';
import styled from 'styled-components';

const Home = (() => {
  const { example, setExample } = React.useContext(ExampleContext);
  return (
    <div>
      <h1>home</h1>
      <h2>{example}</h2>
    </div>

  )
})

export default Home