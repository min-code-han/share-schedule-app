import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimeClock } from "@mui/x-date-pickers"
import React, { useEffect, useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import styled from "@emotion/styled"
import { TimeView } from "@mui/x-date-pickers/models/views"
import clsx from "clsx"
import { selectedTimeField } from "../../pages/Main"

interface TimePickerProps {
  selectedTimeCallback: (arg: selectedTimeField) => void
  handleSave: () => void
}

export const Clock = (props: TimePickerProps) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  const [timeOption, setTimeOption] = useState<TimeView>("hours")
  const [isAm, setInAm] = useState<boolean>(true)

  useEffect(() => {
    if (isAm) {
      props.selectedTimeCallback({ hour: value ? value.hour() : 0, min: value ? value.minute() : 0, isAm })
    } else {
      props.selectedTimeCallback({ hour: value ? value.hour() + 12 : 0, min: value ? value.minute() : 0, isAm })
    }
  }, [value, isAm])

  const handleTimeOption = (option: TimeView) => {
    setTimeOption(option)
  }

  const handleAmPm = () => {
    setInAm(!isAm)
  }

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeClock
          className={clsx(isAm ? "day" : "night")}
          views={[timeOption]}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
      <div style={{ display: "inline-block" }}>
        <ButtonWrap>
          <Button onClick={handleAmPm}>am/pm</Button>
          <Button onClick={() => handleTimeOption("hours")}>hours</Button>
          <Button onClick={() => handleTimeOption("minutes")}>minutes</Button>
          <Button className="save" onClick={props.handleSave}>
            save
          </Button>
        </ButtonWrap>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;

  .day {
    .MuiClock-clock {
      background-color: #d2eaff;
    }
  }

  .night {
    .MuiClock-clock {
      background-color: #f9c244;
    }
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

  &.save {
    background-color: #ffff;
    border: 3px solid #bbb;
    box-sizing: border-box;
  }
`
