import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimeClock } from "@mui/x-date-pickers"
import React, { FC, useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import styled from "@emotion/styled"

interface TimePickerProps {
  handleTime: (hour: string, min: string) => void
}

export const TimePicker: FC<TimePickerProps> = (props) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeClock views={["hours", "minutes"]} value={value} onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .MuiTimeClock-root {
    display: inline-block;
    width: 220px;

    & .MuiClock-root {
      margin: 0;
    }
  }
`
