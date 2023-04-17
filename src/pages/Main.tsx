import React, { useState } from "react"
import styled from "@emotion/styled"
import { Clock } from "../components/TimePicker"
import { TextField } from "@mui/material"
import dayjs from "dayjs"
import { ScheduleList } from "../components/SceduleList"

export interface selectedTimeField {
  hour: number
  min: number
  isAm: boolean
}

export interface scheduleListField {
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
    handleAlert(_schedule[_schedule.length - 1])
  }

  const handleAlert = (schedule: scheduleListField) => {
    if (schedule.title === "") {
      window.alert("스케줄 이름을 작성해 주세요")
      setScheduleList(scheduleList)
    }
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
        {scheduleList.length > 0 && <ScheduleList scheduleListData={scheduleList} />}
      </Wrap>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  padding: 20px 30px;
  min-height: 100vh;
  text-align: center;
  background-color: #f0f0e8;

  .title-input {
    width: 370px;
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
