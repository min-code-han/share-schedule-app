import React from "react"
import styled from "@emotion/styled"
import { MintTextField } from "../components/Input"

const Main = () => {
  return (
    <MainContainer>
      <Title>today's schedule</Title>
      <MintTextField id="standard-basic" label="Standard" variant="standard" />
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f3efe5;
`

const Title = styled.p`
  font-size: 6.25rem;
  font-weight: 800;
`
