import React from 'react'
import ResumeItem from '../ResumeItem'
import { Container } from './styles'

import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaDollarSign
} from 'react-icons/fa'

function Resume({ income, expense, total }) {
  return (
    <Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saidas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  )
}

export default Resume
