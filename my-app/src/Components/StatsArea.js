import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

export function StatsArea(props) {
  const [lastSetTime, setLastSetTime] = useState(0);
  const [lastSetClicksPerMinute, setLastSetClicksPerMinute] = useState(0);
  const [lastSetWrongChars, setLastSetWrongChars] = useState(0);

  const [todaySets, setTodaySets] = useState(parseInt(localStorage.getItem("todaySets") ?? 0));
  const [todayCharsTyped, setTodayCharsTyped] = useState(parseInt(localStorage.getItem("todayCharsTyped") ?? 0));
  const [todayClicksPerMinute, setTodayClicksPerMinute] = useState(
    parseInt(localStorage.getItem("todayClicksPerMinute") ?? 0)
  );
  const [todayClicks, setTodayClicks] = useState(parseInt(localStorage.getItem("todayClicks") ?? 0));
  const [todayTime, setTodayTime] = useState(parseInt(localStorage.getItem("todayTime") ?? 0));
  const [todayWrongChars, setTodayWrongChars] = useState(parseInt(localStorage.getItem("todayWrongChars") ?? 0));
  const [todayMistakeRatio, setTodayMistakeRatio] = useState(0);

  const [totalSets, setTotalSets] = useState(parseInt(localStorage.getItem("totalSets") ?? 0));
  const [totalClicksPerMinute, setTotalClicksPerMinute] = useState(0);
  const [totalClicks, setTotalClicks] = useState(parseInt(localStorage.getItem("totalClicks") ?? 0));
  const [totalTime, setTotalTime] = useState(parseInt(localStorage.getItem("totalTime") ?? 0));
  const [totalMistakeRatio, setTotalMistakeRatio] = useState(0);
  const [totalWrongChars, setTotalWrongChars] = useState(parseInt(localStorage.getItem("totalWrongChars") ?? 0));
  const [totalCharsTyped, setTotalCharsTyped] = useState(parseInt(localStorage.getItem("totalCharsTyped") ?? 0));

  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const [day, setDay] = useState(parseInt(localStorage.getItem("day") ?? new Date().getDay()));
  const [month, setMonth] = useState(parseInt(localStorage.getItem("month") ?? new Date().getMonth()));
  const [year, setYear] = useState(parseInt(localStorage.getItem("year") ?? new Date().getFullYear()));
  const currentDay = new Date().getDay();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const checkDateIsCurrent = currentDay === day && currentMonth === month && currentYear === year;

  function deleteTodayStats() {
    setTodaySets(0);
    setTodayCharsTyped(0);
    setTodayClicks(0);
    setTodayTime(0);
    setTodayWrongChars(0);
  }

  function deleteAllStats() {
    setLastSetTime(0);
    setLastSetClicksPerMinute(0);
    setLastSetWrongChars(0);
    deleteTodayStats();
    setTotalSets(0);
    setTotalClicks(0);
    setTotalCharsTyped(0);
    setTotalTime(0);
    setTotalWrongChars(0);
    props.setLetters((letters) => {
      Object.keys(letters).forEach((element) => {
        letters[element].frequencie = 0;
        letters[element].correct = 0;
      });
      return letters;
    });
  }

  function saveTodayStats() {
    localStorage.setItem("todaySets", todaySets);
    localStorage.setItem("todayCharsTyped", todayCharsTyped);
    localStorage.setItem("todayClicks", todayClicks);
    localStorage.setItem("todayTime", todayTime);
    localStorage.setItem("todayWrongChars", todayWrongChars);
  }

  function saveTotalStats() {
    localStorage.setItem("totalSets", totalSets);
    localStorage.setItem("totalCharsTyped", totalCharsTyped);
    localStorage.setItem("totalClicks", totalClicks);
    localStorage.setItem("totalTime", totalTime);
    localStorage.setItem("totalWrongChars", totalWrongChars);
    localStorage.setItem("letters", JSON.stringify(props.letters));
  }

  function setAndSaveDate() {
    setDay(new Date().getDay());
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
  }

  useEffect(() => setLastSetTime(props.endTime - props.startTime), [props.endTime]);
  useEffect(() => {
    setLastSetClicksPerMinute(Math.round(props.clicks / ((lastSetTime ? lastSetTime / 1000 : 1) / 60)));
    setLastSetWrongChars(props.wrongChars);
    setTodaySets(todaySets + props.sets);
    setTodayCharsTyped(todayCharsTyped + props.charsTyped);
    setTodayClicks(todayClicks + props.clicks);
    setTodayTime(todayTime + lastSetTime);
    setTodayWrongChars(todayWrongChars + props.wrongChars);
    setTotalSets(totalSets + props.sets);
    setTotalClicks(totalClicks + props.clicks);
    setTotalTime(totalTime + lastSetTime);
    setTotalCharsTyped(totalCharsTyped + props.charsTyped);
    setTotalWrongChars(totalWrongChars + props.wrongChars);
  }, [lastSetTime]);
  useEffect(() => {
    setTodayClicksPerMinute(Math.round(todayClicks / ((todayTime ? todayTime / 1000 : 1) / 60)));
    setTodayMistakeRatio(Math.round((todayWrongChars / (todayCharsTyped ? todayCharsTyped : 1)) * 100));
    saveTodayStats();
  }, [todayTime]);
  useEffect(() => {
    setTotalClicksPerMinute(Math.round(totalClicks / ((totalTime ? totalTime / 1000 : 1) / 60)));
    setTotalMistakeRatio(Math.round((totalWrongChars / (totalCharsTyped ? totalCharsTyped : 1)) * 100));
    saveTotalStats();
  }, [totalTime]);
  useEffect(() => {
    props.setSets(0);
    props.setClicks(0);
    props.setWrongChars(0);
    props.setCharsTyped(0);
  }, [lastSetClicksPerMinute]);
  useEffect(() => {
    if (!checkDateIsCurrent) {
      deleteTodayStats();
      setAndSaveDate();
    }
  }, []);

  return (
    <div className="stats-area">
      <h1 className="stats-area__header">Stats</h1>
      <div className="stats-area__title">Last Set</div>
      <Stats text={"Time: " + Math.round(lastSetTime / 1000)} />
      <Stats text={"CPM:" + lastSetClicksPerMinute} />
      <Stats text={"Wrong Chars:" + lastSetWrongChars} />
      <div className="stats-area__title">Today</div>
      <Stats text={"Sets:" + todaySets} />
      <Stats text={"Chars Typed:" + todayCharsTyped} />
      <Stats text={"CPM:" + todayClicksPerMinute} />
      <Stats text={"Time:" + Math.round(todayTime / 1000)} />
      <Stats text={"Mistake Ratio:" + todayMistakeRatio} />
      <div className="stats-area__title">Total</div>
      <Stats text={"Sets:" + totalSets} />
      <Stats text={"CPM:" + totalClicksPerMinute} />
      <Stats text={"Time:" + Math.round(totalTime / 1000)} />
      <Stats text={"Mistake Ratio:" + totalMistakeRatio} />
      {showMoreDetails ? (
        <div className="stats-area__more-details">
          {Object.keys(props.letters).map((char, i) => (
            <div key={i}>
              {`${char}:` +
                (props.letters[char].correct / (props.letters[char].frequencie ? props.letters[char].frequencie : 1)) *
                  100}
            </div>
          ))}
        </div>
      ) : null}
      <div className="stats-area__button-line">
        <Button text="More Details" onClick={() => setShowMoreDetails((value) => !value)} />
        <Button text="Delete Todays Data" onClick={() => deleteTodayStats()} />
        <Button text="Delete All Data" onClick={() => deleteAllStats()} />
      </div>
    </div>
  );
}
