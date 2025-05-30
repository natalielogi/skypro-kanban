import React, { useState } from "react";
import * as S from "./calendar.styled";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";

dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);
dayjs.locale("ru");

const Calendar = () => {
  const [selectedDate, setselectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1;
  const daysInMonth = endOfMonth.date();

  const today = dayjs();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handleDateClick = (day) => {
    if (day) {
      const fullDate = currentDate.date(day);
      setselectedDate(fullDate);
    }
  };

  const goToPrevMonth = () => {
    setCurrentDate((prevDate) => prevDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.add(1, "month"));
    setselectedDate(null);
  };

  return (
    <S.CalendarWrapper>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>{currentDate.format("MMMM YYYY")}</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction onClick={goToPrevMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </S.NavAction>
            <S.NavAction onClick={goToNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.DayNames>
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((d, i) => (
              <S.DayName key={i}>{d}</S.DayName>
            ))}
          </S.DayNames>
          <S.CalendarCells>
            {days.map((day, index) => {
              const isToday =
                day === today.date() &&
                currentDate.month() === today.month() &&
                currentDate.year() === today.year();
              const isSelected =
                selectedDate &&
                day === selectedDate.date() &&
                currentDate.isSame(selectedDate, "month");
              return (
                <S.CalendarCell
                  key={index}
                  $empty={!day}
                  $current={isToday}
                  $selected={isSelected}
                  $clickable={!!day}
                  onClick={() => handleDateClick(day)}
                >
                  {day || ""}
                </S.CalendarCell>
              );
            })}
          </S.CalendarCells>
        </S.CalendarContent>
        <S.CalendarPeriod>
          <S.CalendarP>
            Выберите срок исполнения{" "}
            <span>{selectedDate ? selectedDate.format("DD.MM.YYYY") : ""}</span>
            .
          </S.CalendarP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarWrapper>
  );
};

export default Calendar;
