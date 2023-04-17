import React from "react"
import styled from "@emotion/styled"
import { scheduleListField } from "../../pages/Main"
import { ScheduleListItem } from "./scheduleListItem"

interface ScheduleListProps {
  scheduleListData: scheduleListField[]
}

export const ScheduleList = (props: ScheduleListProps) => {
  return (
    <ScheduleListWrap>
      {props.scheduleListData.map((data, idx) => (
        <ScheduleListItem data={data} key={idx} />
      ))}
    </ScheduleListWrap>
  )
}

const ScheduleListWrap = styled.ul`
  display: inline-block;
  margin-top: 35px;
  width: 370px;
`
