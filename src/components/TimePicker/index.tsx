import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimeClock } from "@mui/x-date-pickers"
import React, { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import styled from "@emotion/styled"
import { TimeView } from "@mui/x-date-pickers/models/views"

// interface TimePickerProps {
//   handleTime: (hour: string, min: string) => void
// }

export const Time = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const [timeOption, setTimeOption] = useState<TimeView>("hours")

  const handleTimeOption = (option: TimeView) => {
    setTimeOption(option)
  }

  console.log(value?.hour())
  console.log(value?.hour() && value?.hour() + 12)

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeClock views={[timeOption]} value={value} onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
      <div style={{ display: "inline-block" }}>
        <ButtonWrap>
          <Button onClick={() => handleTimeOption("hours")}>am/pm</Button>
          <Button onClick={() => handleTimeOption("hours")}>hours</Button>
          <Button onClick={() => handleTimeOption("minutes")}>minutes</Button>
        </ButtonWrap>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;

  .MuiClock-clock {
    background-color: #d2eaff;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-top: 30px;
  &::last-item {
    margin-right: 0;
  }
`

const Button = styled.span`
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 8px;
  background-color: pink;
  cursor: pointer;
`
