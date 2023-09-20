import React, { useState } from "react";

function Movieform({ addMovie }) {
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState("");
  const [duration, setDuration] = useState("");
  const [durationFormatCorrect, setDurationFormatCorrect] = useState(true);

  const handleInputChange = (setState, e) => {
    setState(() => e.target.value);
  };

  const convertDuration = (time) => {
    if (time.slice(-1) === "m") {
      const minutes = parseFloat(time);
      const timeHours = (minutes / 60).toFixed(2);

      return timeHours.toString();
    }
    return parseFloat(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duration.slice(-1) !== "m" && duration.slice(-1) !== "h") {
      setDurationFormatCorrect(false);
      return;
    }

    addMovie(name, ratings, convertDuration(duration));
  };

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              value={name}
              onChange={(e) => handleInputChange(setName, e)}
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              value={ratings}
              min="0"
              max="100"
              onChange={(e) => handleInputChange(setRatings, e)}
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              value={duration}
              onChange={(e) => {
                handleInputChange(setDuration, e);
                setDurationFormatCorrect(true);
              }}
              onClick={() => setDurationFormatCorrect(true)}
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
            />
          </div>
          {/* Use this div when time format is invalid */}
          {!durationFormatCorrect ? (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          ) : (
            <></>
          )}
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
