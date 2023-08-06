import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [request, setRequest] = useState("");
  const clearForm = () => {
    setName("");
    setNumber("");
    setDate("");
    setTime("");
    setRequest("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Table has been Booked");
    clearForm();
  };
  return (
    <div>
      <nav>
        <h3>Table Reservation</h3>
        <button id="home" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </nav>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Name of Guests: </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="number">Number of Guests: </label>
            <input
              id="number"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="date">Date for appointment: </label>
            <input
              id="date"
              type="date"
              placeholder="Sept-5/2023"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="time">Time for appointment: </label>
            <select
              id="time"
              type="time"
              placeholder="11:50AM"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div>
            <label htmlFor="request">Additional Requests: </label>
            <input
              id="request"
              type="text"
              placeholder="I want Quiet place."
              name="request"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            ></input>
          </div>

          <button type="submit">Confirm</button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingPage;
