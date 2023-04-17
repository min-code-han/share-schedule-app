import React, { useState } from "react"
import styled from "@emotion/styled"
import { Clock } from "../components/TimePicker"
import { dividerClasses, TextField } from "@mui/material"
import dayjs from "dayjs"

export interface selectedTimeField {
  hour: number
  min: number
  isAm: boolean
}

interface scheduleListField {
  isAm: string
  title: string
  hour: number
  min: number
}

const Main = () => {
  const [title, setTitle] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState({
    hour: dayjs().hour(),
    min: dayjs().minute(),
    isAm: true
  })
  const [scheduleList, setScheduleList] = useState<scheduleListField[]>([])

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
  }

  const handleSave = () => {
    const _schedule = [
      ...scheduleList,
      {
        title,
        hour: selectedTime.hour,
        min: selectedTime.min,
        isAm: selectedTime.isAm ? "AM" : "PM"
      }
    ]

    setScheduleList(_schedule)
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
        <Time>
          {selectedTime.isAm ? "AM" : "PM"} {selectedTime.hour} : {selectedTime.min}
        </Time>
        <TimePickerWrap>
          <Clock selectedTimeCallback={setSelectedTime} handleSave={handleSave} />
        </TimePickerWrap>
        {scheduleList.length > 0 &&
          scheduleList.map((list, idx) => {
            return (
              <div key={idx}>
                <span>{list.isAm}</span>
                <span>{list.hour}</span>
                <span>{list.min}</span>
                <span>{list.title}</span>
              </div>
            )
          })}
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

const Time = styled.p`
  margin-top: 30px;
  font-size: 2rem;
  font-weight: 600;
`

const TimePickerWrap = styled.div`
  padding-top: 30px;
`
