import React, { useState, useEffect } from "react";
import styled from "styled-components";

function GuitarDate() {
  const [day, setDay] = useState("00");
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");

  useEffect(() => {
    countUpFromTime("Sep 2, 2019 12:00:00");
  }, []);

  const countUpFromTime = (countFrom) => {
    //   countFrom will be the date we want to beging counting up from, in this case the day I started playing guitar
    const count = new Date(countFrom).getTime();
    const now = new Date(),
      countFrometh = new Date(count),
      timeDifference = now - countFrometh;
    const secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

    const days = Math.floor((timeDifference / secondsInADay) * 1);
    const hours = Math.floor(
      ((timeDifference % secondsInADay) / secondsInAHour) * 1
    );
    const mins = Math.floor(
      (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
    );
    const secs = Math.floor(
      ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
        1000) *
        1
    );

    setDay(days);
    setHour(hours);
    setMin(mins);
    setSec(secs);
    // ensure timeout is cleared
    clearTimeout(countUpFromTime.interval);
    // set the interval the functions runs to every second
    countUpFromTime.interval = setTimeout(function () {
      countUpFromTime(countFrom);
    }, 1000);
  };
  return (
    <>
      <h2>I've been playing for:</h2>
      <StyledDate class="countup" id="countup1">
        <div className="days">
          <span class="timeel ">{day} </span>
          <span class="timeel timeRefDays">Days</span>
        </div>
        <div className="hours">
          <span class="timeel ">{hour} </span>
          <span class="timeel timeRefHours">Hours</span>
        </div>
        <div className="mins">
          <span class="timeel ">{min} </span>
          <span class="timeel timeRefMinutes">Minutes</span>
        </div>
        <div className="secs">
          <span class="timeel ">{sec} </span>
          <span class="timeel timeRefSeconds">Seconds</span>
        </div>
      </StyledDate>
    </>
  );
}

const StyledDate = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 2rem 1rem;
  }
`;

export default GuitarDate;
