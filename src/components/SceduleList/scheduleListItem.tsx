import React from "react"
import styled from "@emotion/styled"
import { scheduleListField } from "../../pages/Main"

interface ScheduleListItemProps {
  data: scheduleListField
}

export const ScheduleListItem = (props: ScheduleListItemProps) => {
  return (
    <ListItem>
      <TimeSection>
        {props.data.isAm} {props.data.hour} : {props.data.min}
      </TimeSection>
      <TitleSection>{props.data.title}</TitleSection>
    </ListItem>
  )
}

const ListItem = styled.li`
  width: 100%;
  min-height: 30px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  border-bottom: 1px solid #ccc;
`

const TimeSection = styled.p`
  display: inline-block;
  width: 35%;
`

const TitleSection = styled.p`
  display: inline-block;
  padding: 0 0 10px 10px;
  width: 60%;
  border-left: 1px solid #ccc;
  word-break: break-all;
`
