import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import styled from 'styled-components'
export default function About({isopen, setisopen}) {
  return (
    <Abot>
      <Header
      isopen={isopen}
      setisopen={setisopen}
      />
      <Container/>
      <Footer/>
    </Abot>
  )
}
const Abot = styled.div`


`
