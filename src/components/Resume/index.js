import React from 'react'
import ResumeItem from '../ResumeItem'
import { Container } from './styles'

import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaDollarSign
} from 'react-icons/fa'

function Resume() {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </Container>
  )
}

export default Resume
