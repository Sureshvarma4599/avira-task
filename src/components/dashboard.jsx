import React, { useState } from "react";
export default function Dashboard() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const times = ["10:00 am", "11:00 am", "12:00 pm", "1:00 pm"];
  const onDateHandler = (e) => {
    setDate(e.target.value);
  };
  const onTextHandler = (e) => {
    setText(e.currentTarget.value);
  };
  const onTimeHandler = (e) => {
    setTime(e.target.value);
  };
  return (
    <div className="eventForm">
      <input type="date" onChange={onDateHandler} />
      <input type="text" onChange={onTextHandler} />
      <select onChange={onTimeHandler}>
        {times.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <div className="eventCard">
        <h3>Event Scheduled on</h3>
        <p>Date:{date}</p>
        <p>Time:{time}</p>
        <p>Comments:{text}</p>
      </div>
    </div>
  );
}
