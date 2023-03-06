import React from "react"
import styled from "@emotion/styled"
import mainBg from "./images/mainBg.jpeg"

const Main = () => {
  return <MainContainer>HELLO</MainContainer>
}

export default Main

const MainContainer = styled.div`
  margin: 0 auto;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vh;
  height: 100vh;
`
