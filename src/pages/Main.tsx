import React, { useState } from "react"
import styled from "@emotion/styled"
import { TimePicker } from "../components/TimePicker"
import { TextField } from "@mui/material"

const Main = () => {
  const [title, setTitle] = useState<string>("")
  const [time, setTime] = useState({ hour: "", min: "" })

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
  }

  const handleTime = (hour: string, min: string) => {
    setTime({ ...time, hour, min })
  }
  return (
    <MainContainer>
      <Title>today's schedule</Title>
      <Wrap>
        <TextField id="standard-basic" label="스케줄 이름" variant="standard" value={title} onChange={handleTitle} />
        <TimePickerWrap>
          <TimePicker handleTime={handleTime} />
        </TimePickerWrap>
      </Wrap>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  padding: 20px 30px;
  height: 100vh;
`
const Wrap = styled.div`
  padding: 20px 0;
  width: 100%;
  max-width: 810px;
`

const Title = styled.p`
  font-size: 6.25rem;
  font-weight: 800;
`

const TimePickerWrap = styled.div`
  padding-top: 30px;
  width: 320px;
`
