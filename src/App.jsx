import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [activity, setActivity] = useState("");
  const [month, setMonth] = useState("");
  const [count, setCount] = useState([]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setCount((prevData) => [...prevData, ...JSON.parse(storedCount)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify([...count]));
  }, [count]);

  var monthsFull = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const today = monthsFull[date.getMonth()];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMonth(today);

    if (activity === "") {
      return;
    }

    setCount((prevData) => setCount([...prevData, { activity, today }]));

    setActivity("");
  };

  const handleDelete = (index) => {
    setCount((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="title">
        <h2 className="heading">Monthly Activity Tracker !</h2>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              className="input"
              type="text"
              placeholder="e.g. coding"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button className="add">Add Activity</button>
          </form>
        </div>
      </div>
      {count &&
        count.map((card, index) => (
          <Task
            key={index}
            index={index}
            handleDelete={handleDelete}
            activity={card.activity}
            today={card.today}
          />
        ))}
    </>
  );
}

export default App;
