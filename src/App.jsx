import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [activity, setActivity] = useState("");
  const [month, setMonth] = useState("");
  const [count, setCount] = useState([]);

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

    if(activity===""){
      return
    }

    setCount((prevData) => setCount([...prevData, { activity, today }]));

    setActivity("");
  };

  const handleDelete = (index) => {
    setCount((prevData)=>prevData.filter((_,i)=>i!==index));
  };


  useEffect(()=>{
    

  },[count])

  return (
    <>
      <h2>Monthly Activity Tracker !</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. coding"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button>Add Activity</button>
        </form>
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
