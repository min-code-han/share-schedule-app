import React, { useState } from "react"
import styled from "@emotion/styled"
import { Time } from "../components/TimePicker"
import { TextField } from "@mui/material"

const Main = () => {
  const [title, setTitle] = useState<string>("")

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
  }

  return (
    <MainContainer>
      <Title>today's schedule</Title>
      <Wrap>
        <TextField
          className="title-input"
          id="standard-basic"
          label="스케줄 이름"
          variant="standard"
          value={title}
          onChange={handleTitle}
        />
        <TimePickerWrap>
          <Time />
        </TimePickerWrap>
      </Wrap>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  padding: 20px 30px;
  height: 100vh;
  text-align: center;
  background-color: #f0f0e8;

  .title-input {
    width: 300px;
  }
`
const Wrap = styled.div`
  padding-top: 80px;
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: 800;
`

const TimePickerWrap = styled.div`
  padding-top: 30px;
`
