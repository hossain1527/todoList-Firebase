import React, { useState, useEffect } from "react";
import { unstable_concurrentAct } from "react-dom/test-utils";
import firebase from "./firebase";

const SORT_OPTIONS = {
  TIME_ASC: { column: "time_seconds", direction: "asc" },
  TIME_DESC: { column: "time_seconds", direction: "desc" },

  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" },
};

function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTimes(newTimes);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const TimeList = () => {
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const times = useTimes(sortBy);
  return (
    <>
      <div>
        <h2>Tasks</h2>
      </div>

      <div>
        <label>Sort By: </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value="TIME_ASC">Ascending Order (duration wise)</option>
          <option value="TIME_DESC">Descending Order (duration wise)</option>
          <option disabled>---</option>
          <option value="TITLE_ASC">Alphabetically (a-z)</option>
          <option value="TITLE_DESC">Alphabetically (z-a)</option>
        </select>
      </div>

      <ol>
        {times.map((time) => (
          <li key={time.id}>
            <div className="time-entry">
              {time.title}
              <code className="time">{time.time_seconds} mins</code>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TimeList;
